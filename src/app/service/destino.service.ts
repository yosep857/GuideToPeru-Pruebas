import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Destino } from '../model/Destinos';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  private url = `${base_url}/destinos`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Destino[]>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Destino[]>(this.url);
  }
  insert(Destino: Destino) {
    return this.http.post(this.url, Destino);
  }

  setList(listaNueva: Destino[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Destino>(`${this.url}/${id}`);
  }
  update(aut: Destino) {
    return this.http.put(this.url,aut);
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
