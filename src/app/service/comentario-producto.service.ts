import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComentarioProducto } from '../model/ComentarioProducto';
import {Subject} from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn:'root',
})
export class ComentarioProductoService {
  private url = `${base_url}/comentarioproductos`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <ComentarioProducto[]>();
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<ComentarioProducto[]>(this.url);
  }
  insert(comentarioproducto: ComentarioProducto){
    return this.http.post(this.url, comentarioproducto);
  }
  setList(listaNueva:ComentarioProducto[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<ComentarioProducto>(`${this.url}/${id}`);
  }
  update(a:ComentarioProducto){
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
