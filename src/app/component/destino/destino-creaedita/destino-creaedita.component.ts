import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Destino } from 'src/app/model/Destinos';

import { DestinoService } from 'src/app/service/destino.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-destino-creaedita',
  templateUrl: './destino-creaedita.component.html',
  styleUrls: ['./destino-creaedita.component.css']
})
export class DestinoCreaeditaComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  form: FormGroup = new FormGroup({});
  destino: Destino = new Destino();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;

  constructor(private aS: DestinoService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      ubicacion: new FormControl(),
      descripcion: new FormControl(),
      imagen: new FormControl(),
      distrito: new FormControl(),
      departarmento: new FormControl()
    });
  }

  //del modelo
  aceptar(): void {
    this.destino.id = this.form.value['id'];
    this.destino.nombre= this.form.value['nombre'];
    this.destino.ubicacion = this.form.value['ubicacion'];
    this.destino.descripcion = this.form.value['descripcion'];
    this.destino.imagen = this.form.value['imagen'];
    this.destino.distrito = this.form.value['distrito'];
    this.destino.departarmento = this.form.value['departarmento'];



    if (this.form.value['nombre'].length > 0 &&
      this.form.value['ubicacion'].length > 0)       {

      if (this.edicion) {
        this.aS.update(this.destino).subscribe((data) => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      } else {
        this.aS.insert(this.destino).subscribe((data)=> {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['destinos']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          ubicacion: new FormControl(data.ubicacion),
          descripcion: new FormControl(data.descripcion),
          imagen: new FormControl(data.imagen),
          distrito: new FormControl(data.distrito),
          departarmento: new FormControl(data.departarmento)
        })
      })
    }
  }
}
