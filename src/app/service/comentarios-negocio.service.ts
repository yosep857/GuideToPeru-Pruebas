import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComentarioNegocio } from '../model/comentariosNegocio';
import {Subject} from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ComentariosNegocioService {
  private url=`${base_url}/comentariosnegocios`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <ComentarioNegocio[]>();

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<ComentarioNegocio[]>(this.url);
  }
  insert(comentarionegocio: ComentarioNegocio) {
    return this.http.post(this.url, comentarionegocio);
  }
  setList(listaNueva:ComentarioNegocio[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<ComentarioNegocio>(`${this.url}/${id}`);
  }
  update(a:ComentarioNegocio){
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
