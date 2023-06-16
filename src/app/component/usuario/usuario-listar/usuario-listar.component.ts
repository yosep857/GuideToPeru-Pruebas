import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { MatSidenav } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table'
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource:MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns:string[] = ["id", "email", "telefono", "modificar", "borrar"];

  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  idMayor: number = 0

  constructor(private uS:UsuarioService, private dialog:MatDialog) {}
  ngOnInit():void {
    this.uS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    
      this.uS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
    
    })
  }
  
  confirm(id:number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }
  
  eliminar(id:number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }
  
  filtrar(z:any) {
    this.dataSource.filter = z.target.value.trim();
  }
}

// export class PaginatorOverviewExample {}