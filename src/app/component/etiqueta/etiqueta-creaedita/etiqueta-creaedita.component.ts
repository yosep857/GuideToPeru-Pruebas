import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import { Etiqueta } from 'src/app/model/Etiqueta';
import { Producto } from 'src/app/model/producto';


@Component({
  selector: 'app-etiqueta-creaedita',
  templateUrl: './etiqueta-creaedita.component.html',
  styleUrls: ['./etiqueta-creaedita.component.css']
})
export class EtiquetaCreaeditaComponent implements OnInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  mensaje: string = '';
  etiqueta: Etiqueta = new Etiqueta();
  lista: Producto[] = [];

  ngOnInit(): void{
    this.route.params.subscribe((data: Params) => {

      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
  }
  constructor(private cS: EtiquetaService,
    private router: Router,
    private route: ActivatedRoute){}

  aceptar(): void{
    this.etiqueta.idEtiqueta=this.form.value['id'];
    this.etiqueta.nombreEtiqueta=this.form.value['nombreEtiqueta'];
    if (this.form.value['nombreEtiqueta'].length>0 ){

      if (this.edicion) {
        this.cS.update(this.etiqueta).subscribe(() => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data)
          })
        })
      } else {
        this.cS.insert(this.etiqueta).subscribe(data => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data)
          })
        })
      }
      this.router.navigate(['etiquetas']);
    } else {
    this.mensaje = "Ingrese las etiquetas"
    }
  }
  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombreEtiqueta: new FormControl(data.nombreEtiqueta),          
        })
      })
    }
  } 

}