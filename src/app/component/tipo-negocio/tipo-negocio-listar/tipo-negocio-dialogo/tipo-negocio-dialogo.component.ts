import { Component } from '@angular/core';
import { TipoNegocioService } from 'src/app/service/tipo-negocio.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-negocio-dialogo',
  templateUrl: './tipo-negocio-dialogo.component.html',
  styleUrls: ['./tipo-negocio-dialogo.component.css']
})
export class TipoNegocioDialogoComponent implements OnInit {
  constructor(private uS: TipoNegocioService,
    private dialogRef: MatDialogRef<TipoNegocioDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.uS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
