import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/clientes';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private url = `${base_url}/clientes`
  private listaCambio = new Subject<Cliente[]>();
  private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Cliente[]>(this.url);
  }

  insert(cliente: Cliente) {

    return this.http.post(this.url, cliente)
  }

  setList(ListaNueva: Cliente[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listID(id: number) {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  update(a: Cliente) {
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
