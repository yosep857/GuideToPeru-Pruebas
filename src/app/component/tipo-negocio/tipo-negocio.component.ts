import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-negocio',
  templateUrl: './tipo-negocio.component.html',
  styleUrls: ['./tipo-negocio.component.css']
})
export class TipoNegocioComponent implements OnInit {
  constructor(public route:ActivatedRoute){}
  ngOnInit():void {}

}
