import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EtiquetaProducto } from '../model/EtiquetaProducto';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class EtiquetaProductoService {
  private url=`${base_url}/etiquetaproductos`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <EtiquetaProducto[]>();
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<EtiquetaProducto[]>(this.url);
  }
  insert(etiquetaproducto: EtiquetaProducto) {
    return this.http.post(this.url, etiquetaproducto);
  }
  setList(listaNueva:EtiquetaProducto[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<EtiquetaProducto>(`${this.url}/${id}`);
  }
  update(a:EtiquetaProducto){
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
