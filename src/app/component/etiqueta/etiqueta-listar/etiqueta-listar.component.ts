import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { MatSidenav } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table'
import { Etiqueta } from 'src/app/model/Etiqueta';
import { EtiquetaService } from 'src/app/service/etiqueta.service';
import { EtiquetaDialogoComponent } from './etiqueta-dialogo/etiqueta-dialogo.component'

@Component({
  selector: 'app-etiqueta-listar',
  templateUrl: './etiqueta-listar.component.html',
  styleUrls: ['./etiqueta-listar.component.css']
})
export class EtiquetaListarComponent implements OnInit{ 

  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  idMayor: number = 0
  lista: Etiqueta[]=[]
  dataSource: MatTableDataSource<Etiqueta> = new MatTableDataSource();  
  displayedColumns:string[] = ["id", "nombreEtiqueta"];
  constructor(private uS: EtiquetaService,private dialog:MatDialog) {}
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
    this.dialog.open(EtiquetaDialogoComponent);
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