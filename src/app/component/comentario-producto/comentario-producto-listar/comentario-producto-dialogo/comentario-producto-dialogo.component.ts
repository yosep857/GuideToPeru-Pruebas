import { Component } from '@angular/core';
import { ComentarioProductoService } from 'src/app/service/comentario-producto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comentario-producto-dialogo',
  templateUrl: './comentario-producto-dialogo.component.html',
  styleUrls: ['./comentario-producto-dialogo.component.css']
})
export class ComentarioProductoDialogoComponentimplements OnInit {
  constructor(private uS: ComentarioProductoService,
    private dialogRef: MatDialogRef<ComentarioProductoService>) {} 
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.uS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
