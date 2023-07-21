import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  contacto: Contacto = new Contacto();
  constructor(private clientesService: ClientesService,
    private router: Router) {

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params)
      this.contacto = new Contacto()
      this.contacto = params['contacto']
    }
  }
guardarWS(){
  this.clientesService.save(this.contacto).subscribe(data=>{
    if(data.codigo==99){
      alert("Codigo: "+data.codigo +" "+data.mensaje);
    }else{
    this.router.navigate(['paginas/listacontactos'])}
  }); 
  this.contacto = new Contacto();  
}
}
