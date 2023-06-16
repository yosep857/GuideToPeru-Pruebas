import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentario-producto',
  templateUrl: './comentario-producto.component.html',
  styleUrls: ['./comentario-producto.component.css']
})
export class ComentarioProductoComponent implements OnInit {
  constructor(public route:ActivatedRoute) {}
  ngOnInit():void {}
}
