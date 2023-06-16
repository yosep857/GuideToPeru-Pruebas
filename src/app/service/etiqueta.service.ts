import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etiqueta } from '../model/Etiqueta';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {
  private url = `${base_url}/etiquetas`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject <Etiqueta[]>();
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Etiqueta[]>(this.url);
  }
  insert(etiqueta: Etiqueta){
    return this.http.post(this.url, etiqueta);
  }
  setList(listaNueva: Etiqueta[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get< Etiqueta>(`${this.url}/${id}`);
  }
  update(a:Etiqueta){
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
