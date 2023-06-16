import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = `${base_url}/productos`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <Producto[]>();
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Producto[]>(this.url);
  }
  insert(negocio: Producto) {
    return this.http.post(this.url, negocio);
  }
  setList(listaNueva:Producto[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Producto>(`${this.url}/${id}`);
  }
  update(a:Producto){
    return this.http.put(this.url,a);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
