import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoNegocio } from '../model/TipoNegocio';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipoNegocioService {
  private url = `${base_url}/tiponegocios`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <TipoNegocio[]>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<TipoNegocio[]>(this.url);
  }
  insert(negocio: TipoNegocio) {
    return this.http.post(this.url, negocio);
  }
  setList(listaNueva:TipoNegocio[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<TipoNegocio>(`${this.url}/${id}`);
  }
  update(a:TipoNegocio){
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
