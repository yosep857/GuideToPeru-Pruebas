import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './component/cliente/cliente.component';
import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';

import { ComprasComponent } from './component/compras/ComprasComponent';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';

import { NegocioComponent } from './component/negocio/negocio.component';
import { NegocioCreaeditaComponent } from './component/negocio/negocio-creaedita/negocio-creaedita.component';

import { DestinoComponent } from './component/destino/destino.component';
import { DestinoCreaeditaComponent } from './component/destino/destino-creaedita/destino-creaedita.component';

import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  
  { path: '', component: LandingPageComponent },
  { path: 'clientes', component: ClienteComponent, children: [
    { path: 'registrarcl', component: ClienteCreaeditaComponent },
    { path: 'edicion/:id', component: ClienteCreaeditaComponent }
  ]},
  { path: 'compras', component: ComprasComponent, children: [
    { path: 'registrarcm', component: ComprasCreaeditaComponent },
    { path: 'edicion/:id', component: ComprasCreaeditaComponent }
  ]},
  { path: 'destinos', component: DestinoComponent, children: [
    { path: 'registrardt', component: DestinoCreaeditaComponent },
    { path: 'edicion/:id', component: DestinoCreaeditaComponent }
  ]},
  { path: 'negocios', component: NegocioComponent, children: [
    { path: 'registrarng', component: NegocioCreaeditaComponent },
    { path: 'edicion/:id', component: NegocioCreaeditaComponent }
  ]},
  { path: 'usuarios', component: UsuarioComponent, children: [
    { path: 'registrarus', component: UsuarioCreaeditaComponent },
    { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
