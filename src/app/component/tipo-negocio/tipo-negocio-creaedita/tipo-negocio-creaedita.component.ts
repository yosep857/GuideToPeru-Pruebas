import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TipoNegocio } from 'src/app/model/TipoNegocio';
import { TipoNegocioService } from 'src/app/service/tipo-negocio.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import { Negocio } from 'src/app/model/negocio';

@Component({
  selector: 'app-tipo-negocio-creaedita',
  templateUrl: './tipo-negocio-creaedita.component.html',
  styleUrls: ['./tipo-negocio-creaedita.component.css']
})
export class TipoNegocioCreaeditaComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason ='';
  close(reason: string){
    this.reason=reason;
    this.sidenav.close();
  }
  shouldRun=true;

 
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  tiponegocio: TipoNegocio = new TipoNegocio();
  idTipoNegocio: number=0;
  nombre:string="";
  descripcion:string="";
  lista: Negocio[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idTipoNegocio = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      idTipoNegocio: new FormControl(),
      nombre: new FormControl(),
      descripcion: new FormControl(),      
    });
  }
  constructor(
    private aS: TipoNegocioService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  aceptar(): void{
    this.tiponegocio.idTipoNegocio = this.form.value['idTipoNegocio'];
    this.tiponegocio.nombre= this.form.value['nombre'];
    this.tiponegocio.descripcion = this.form.value['nombre'];    
    if (this.form.value['nombre'].length > 0 && this.form.value['descripción'].length > 0) {
      if (this.edicion) {
        this.aS.update(this.tiponegocio).subscribe(()=>{
          this.aS.list().subscribe(data => {
            this.aS.setList(data)
          })
        })
      } else {
        this.aS.insert(this.tiponegocio).subscribe(data => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['tiponegocios']);
    } else {
      this.mensaje = 'Tipos de Negocio';
    }
  }
  init() {
    if (this.edicion) {
      this.aS.listId(this.idTipoNegocio).subscribe(data => {
        this.form = new FormGroup({
          idTipoNegocio: new FormControl(data.idTipoNegocio),
          nombre: new FormControl(data.nombre),
          descripcion: new FormControl(data.descripcion),
          
        });
      });
    }
  }

}
