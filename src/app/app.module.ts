import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './component/cliente/cliente.component';
import { ComprasComponent } from './component/compras/ComprasComponent';
import { NegocioComponent } from './component/negocio/negocio.component';
import { DestinoComponent } from './component/destino/destino.component';
import { UsuarioComponent } from './component/usuario/usuario.component';

import { ClienteListarComponent } from './component/cliente/cliente-listar/cliente-listar.component';
import { ComprasListarComponent } from './component/compras/compras-listar/compras-listar.component';
import { NegocioListarComponent } from './component/negocio/negocio-listar/negocio-listar.component';
import { DestinoListarComponent } from './component/destino/destino-listar/destino-listar.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';

import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';
import { NegocioCreaeditaComponent } from './component/negocio/negocio-creaedita/negocio-creaedita.component';
import { DestinoCreaeditaComponent } from './component/destino/destino-creaedita/destino-creaedita.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';

import { ClienteDialogoComponent } from './component/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { ComprasDialogoComponent } from './component/compras/compras-listar/compras-dialogo/compras-dialogo.component';
import { NegocioDialogoComponent } from './component/negocio/negocio-listar/negocio-dialogo/negocio-dialogo.component';
import { DestinoDialogoComponent } from './component/destino/destino-listar/destino-dialogo/destino-dialogo.component';
import { UsuarioDialogoComponent } from './component/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './component/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MatSelectModule } from '@angular/material/select';
import { ComentarioProductoComponent } from './component/comentario-producto/comentario-producto.component';
import { ComentariosNegocioComponent } from './component/comentarios-negocio/comentarios-negocio.component';
import { EtiquetaComponent } from './component/etiqueta/etiqueta.component';
import { EtiquetaProductoComponent } from './component/etiqueta-producto/etiqueta-producto.component';
import { ProductoComponent } from './component/producto/producto.component';
import { TipoNegocioComponent } from './component/tipo-negocio/tipo-negocio.component';
import { ComentarioNegocioCreaeditaComponent } from './component/comentario-negocio/comentario-negocio-creaedita/comentario-negocio-creaedita.component';
import { ComentarionegocioCreaeditaComponent } from './component/comentarionegocio/comentarionegocio-creaedita/comentarionegocio-creaedita.component';
import { ComentariosNegocioCreaeditaComponent } from './component/comentarios-negocio/comentarios-negocio-creaedita/comentarios-negocio-creaedita.component';
import { ComentariosNegocioListarComponent } from './component/comentarios-negocio/comentarios-negocio-listar/comentarios-negocio-listar.component';
import { ComentariosNegocioListarDialogoComponent } from './component/comentarios-negocio/comentarios-negocio-listar/comentarios-negocio-listar-dialogo/comentarios-negocio-listar-dialogo.component';
import { ComentariosNegocioDialogoComponent } from './component/comentarios-negocio/comentarios-negocio-listar/comentarios-negocio-dialogo/comentarios-negocio-dialogo.component';
import { ComentarioProductoCreaeditaComponent } from './component/comentario-producto/comentario-producto-creaedita/comentario-producto-creaedita.component';
import { ComentarioProductoListarComponent } from './component/comentario-producto/comentario-producto-listar/comentario-producto-listar.component';
import { ComentarioProductoDialogoComponent } from './component/comentario-producto/comentario-producto-listar/comentario-producto-dialogo/comentario-producto-dialogo.component';
import { EtiquetaCreaeditaComponent } from './component/etiqueta/etiqueta-creaedita/etiqueta-creaedita.component';
import { EtiquetaListarComponent } from './component/etiqueta/etiqueta-listar/etiqueta-listar.component';
import { EtiquetaDialogoComponent } from './component/etiqueta/etiqueta-listar/etiqueta-dialogo/etiqueta-dialogo.component';
import { EtiquetaProductoCreaeditaComponent } from './component/etiqueta-producto/etiqueta-producto-creaedita/etiqueta-producto-creaedita.component';
import { EtiquetaProductoListarComponent } from './component/etiqueta-producto/etiqueta-producto-listar/etiqueta-producto-listar.component';
import { EtiquetaProductoDialogoComponent } from './component/etiqueta-producto/etiqueta-producto-listar/etiqueta-producto-dialogo/etiqueta-producto-dialogo.component';
import { ProductoCreaeditaComponent } from './component/producto/producto-creaedita/producto-creaedita.component';
import { ProductoListarComponent } from './component/producto/producto-listar/producto-listar.component';
import { ProductoDialogoComponent } from './component/producto/producto-listar/producto-dialogo/producto-dialogo.component';
import { TipoNegocioCreaeditaComponent } from './component/tipo-negocio/tipo-negocio-creaedita/tipo-negocio-creaedita.component';
import { TipoNegocioListarComponent } from './component/tipo-negocio/tipo-negocio-listar/tipo-negocio-listar.component';
import { TipoNegocioDialogoComponent } from './component/tipo-negocio/tipo-negocio-listar/tipo-negocio-dialogo/tipo-negocio-dialogo.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteListarComponent,
    ClienteCreaeditaComponent,
    MenuComponent,
    ClienteDialogoComponent,

    ComprasComponent,
    ComprasListarComponent,
    ComprasCreaeditaComponent,
    ComprasDialogoComponent,

    NegocioComponent,
    NegocioListarComponent,
    NegocioCreaeditaComponent,
    NegocioDialogoComponent,

    DestinoComponent,
    DestinoListarComponent,
    DestinoCreaeditaComponent,
    DestinoDialogoComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    UsuarioDialogoComponent,
    LandingPageComponent,
    ComentarioProductoComponent,
    ComentariosNegocioComponent,
    EtiquetaComponent,
    EtiquetaProductoComponent,
    ProductoComponent,
    TipoNegocioComponent,
    ComentarioNegocioCreaeditaComponent,
    ComentarionegocioCreaeditaComponent,
    ComentariosNegocioCreaeditaComponent,
    ComentariosNegocioListarComponent,
    ComentariosNegocioListarDialogoComponent,
    ComentariosNegocioDialogoComponent,
    ComentarioProductoCreaeditaComponent,
    ComentarioProductoListarComponent,
    ComentarioProductoDialogoComponent,
    EtiquetaCreaeditaComponent,
    EtiquetaListarComponent,
    EtiquetaDialogoComponent,
    EtiquetaProductoCreaeditaComponent,
    EtiquetaProductoListarComponent,
    EtiquetaProductoDialogoComponent,
    ProductoCreaeditaComponent,
    ProductoListarComponent,
    ProductoDialogoComponent,
    TipoNegocioCreaeditaComponent,
    TipoNegocioListarComponent,
    TipoNegocioDialogoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
