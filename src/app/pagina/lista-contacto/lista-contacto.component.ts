import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.scss']
})
export class ListaContactoComponent {
  listadoContactos: Contacto[] = []
  listadoContactosWS: any;
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Celular', 'Direccion', 'Accion'];//quitamos correo
  dataSource = this.clientesService.getAll();
  @ViewChild(MatTable)
  table!: MatTable<Contacto>;
  constructor(private clientesService: ClientesService,
    private router: Router) {
   this.listadoContactosWS = clientesService.getAll()
    console.log('listadoContactos', this.listadoContactosWS)
  }
  ngOnInit(): void {
    this.listadoContactosWS = this.clientesService.getAll()
  }

  editar(contacto: Contacto) {
    console.log(contacto)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
      }
    }
    this.router.navigate(['paginas/nuevo-contacto'], params)
  }
  eliminarWS(contacto: Contacto) {
    this.clientesService.delete(contacto.cedula).subscribe(
      (data) => {
        alert(data.error.text)
      },(error)=>{
        alert(error.error.text)
        console.log(error)
      });
      this.recargarPagina()
  }
  recargarPagina(){
     // Obtiene la URL actual
     const currentUrl = this.router.url;

     // Navega a la misma URL para recargar la página
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
       this.router.navigate([currentUrl]);
     });
  }
}
