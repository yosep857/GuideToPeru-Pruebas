import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { compras } from '../model/compras';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private url = `${base_url}/Compras`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<compras[]>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<compras[]>(this.url);
  }

  insert(compras: compras) {
    return this.http.post(this.url, compras);
  }

  setList(listaNueva: compras[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<compras>(`${this.url}/${id}`)
  }

  update(c: compras) {
    return this.http.put(this.url,c);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }

  setConfirmDelete(estado:boolean){
    this.confirmarEliminacion.next(estado);
  }
}
