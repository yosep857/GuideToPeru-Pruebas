import { Component, OnInit } from '@angular/core';
import { NegocioService } from 'src/app/service/negocio.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-negocio-dialogo',
  templateUrl: './negocio-dialogo.component.html',
  styleUrls: ['./negocio-dialogo.component.css']
})
export class NegocioDialogoComponent implements OnInit {
  constructor(private uS: NegocioService,
    private dialogRef: MatDialogRef<NegocioDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.uS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}