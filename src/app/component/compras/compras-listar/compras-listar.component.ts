import { Component, OnInit,ViewChild } from '@angular/core';
import { compras } from 'src/app/model/compras';
import { ComprasService } from 'src/app/service/compras.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { ComprasDialogoComponent } from './compras-dialogo/compras-dialogo.component';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-compras-listar',
  templateUrl: './compras-listar.component.html',
  styleUrls: ['./compras-listar.component.css']
})
export class ComprasListarComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;


  lista: compras[] = []
  dataSource: MatTableDataSource<compras> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['codigo', 'cantidad', 'precio_total', 'descripcion', 'fecha', 'cliente_codigo', 'negocio_codigo', 'accion01','accion02']
  constructor(private cS: ComprasService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.cS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ComprasDialogoComponent);
  }

  eliminar(id: number) {
    this.cS.delete(id).subscribe(()=>{
      this.cS.list().subscribe(data=>{
        this.cS.setList(data);
      })

    })

  }

}
