import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/service/compras.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-compras-dialogo',
  templateUrl: './compras-dialogo.component.html',
  styleUrls: ['./compras-dialogo.component.css']
})
export class ComprasDialogoComponent implements OnInit {

  constructor(private cS: ComprasService,
    private dialogRef: MatDialogRef<ComprasDialogoComponent>) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.cS.setConfirmDelete(estado);
    this.dialogRef.close();
  }

}
