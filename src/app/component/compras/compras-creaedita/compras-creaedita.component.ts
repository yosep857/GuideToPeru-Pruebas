import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { compras } from 'src/app/model/compras';
import * as moment from 'moment'
import { ComprasService } from 'src/app/service/compras.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-compras-creaedita',
  templateUrl: './compras-creaedita.component.html',
  styleUrls: ['./compras-creaedita.component.css']
})
export class ComprasCreaeditaComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  id: number = 0
  edicion: boolean = false

  form: FormGroup = new FormGroup({});
  compras: compras = new compras();
  mensaje: string = "";
  fecha_max: Date = moment().add(1, 'days').toDate();

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })



    this.form = new FormGroup({
      id: new FormControl(),
      cantidad: new FormControl(),
      precio_total: new FormControl(),
      descripcion: new FormControl(),
      fecha: new FormControl(),
      Cliente_ID: new FormControl(),
      Negocio_ID: new FormControl(),
    })

  }

  constructor(private cS: ComprasService, private router: Router, private route: ActivatedRoute) { }

  aceptar(): void {
    this.compras.id = this.form.value['id'];
    this.compras.cantidad = this.form.value['cantidad'];
    this.compras.precio_total = this.form.value['precio_total'];
    this.compras.descripcion = this.form.value['descripcion'];
    this.compras.fecha = this.form.value['fecha'];
    this.compras.Cliente_ID = this.form.value['Cliente_ID'];
    this.compras.Negocio_ID = this.form.value['Negocio_ID'];
    if (this.form.value['cantidad'] > 0 &&
      this.form.value['precio_total'] > 0 &&
      this.form.value['descripcion'].length > 0) {

      if (this.edicion) {
        this.cS.update(this.compras).subscribe(() => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data)
          })


        })


      } else {
        this.cS.insert(this.compras).subscribe(data => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data)
          })
        })
      }
      this.router.navigate(['compras']);

    }
    else {
      this.mensaje = "Ingrese los datos de la compra"
    }
  }

  init() {

    if (this.edicion) {

      this.cS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({

          id: new FormControl(data.id),
          cantidad: new FormControl(data.cantidad),
          precio_total: new FormControl(data.precio_total),
          descripcion: new FormControl(data.descripcion),
          fecha: new FormControl(data.fecha),
          Cliente_ID: new FormControl(data.Cliente_ID),
          Negocio_ID: new FormControl(data.Negocio_ID)


        })

      })
    }
  }

}
