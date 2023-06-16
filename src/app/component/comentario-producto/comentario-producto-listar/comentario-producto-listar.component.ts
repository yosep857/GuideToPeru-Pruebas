import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Producto } from 'src/app/model/producto';
import { ComentarioProducto } from 'src/app/model/ComentarioProducto';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ComentarioProductoService } from 'src/app/service/comentario-producto.service';

@Component({
  selector: 'app-comentario-producto-listar',
  templateUrl: './comentario-producto-listar.component.html',
  styleUrls: ['./comentario-producto-listar.component.css']
})
export class ComentarioProductoListarComponent OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  lista: Producto[]=[]
  dataSource: MatTableDataSource<ComentarioProducto> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['id', 'comentario', 'calificacion','producto','calificacion','accion01','accion02'];
  constructor(private uS: ComentarioProductoService,private dialog:MatDialog) {}
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
    this.dialog.open(ComentarioProductoListarComponent);
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
export class PaginatorOverviewExample {}
