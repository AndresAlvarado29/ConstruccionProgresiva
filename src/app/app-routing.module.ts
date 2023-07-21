import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { ListaContactoComponent } from './pagina/lista-contacto/lista-contacto.component';

const routes: Routes = [
  {path:"paginas/listacontactos", component: ListaContactoComponent},
  {path:"paginas/nuevo-contacto", component: ContactoComponent},
  {path:"paginas/crear-contacto", component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
