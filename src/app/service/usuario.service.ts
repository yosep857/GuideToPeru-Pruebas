import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private url = `${base_url}/usuarios`
  private listaCambio = new Subject<Usuario[]>();
  private confirmarEliminacion = new Subject<Boolean>()
  
  constructor(private http:HttpClient) {}
  
  list() {
    return this.http.get<Usuario[]>(this.url);
  }

  insert(cliente:Usuario) {

    return this.http.post(this.url, cliente)
  }

  setList(ListaNueva:Usuario[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listID(id:number) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  update(a:Usuario) {
    return this.http.put(this.url,a);

  }

  delete(id:number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }

  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

}