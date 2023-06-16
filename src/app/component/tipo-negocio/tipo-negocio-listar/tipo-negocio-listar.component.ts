import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { TipoNegocio } from 'src/app/model/TipoNegocio';
import { TipoNegocioService } from 'src/app/service/tipo-negocio.service';
import { TipoNegocioDialogoComponent } from './tipo-negocio-dialogo/tipo-negocio-dialogo.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-negocio-listar',
  templateUrl: './tipo-negocio-listar.component.html',
  styleUrls: ['./tipo-negocio-listar.component.css']
})
export class TipoNegocioListarComponent implements OnInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason="";
  close(reason: string){
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  lista: TipoNegocio[]=[]
  dataSource: MatTableDataSource<TipoNegocio> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['idTipoNeogico', 'nombre', 'descripcion','accion01','accion02'];

  constructor(private uS: TipoNegocioService,private dialog:MatDialog) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  })
  }  
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(TipoNegocioDialogoComponent);
  }
  eliminar(id: number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }

  filter(z:any){
this.dataSource.filter= z.target.value.trim();
  }

}
export class PaginatorOverviewExample{}
