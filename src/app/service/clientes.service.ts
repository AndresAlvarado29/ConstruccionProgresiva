import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private http: HttpClient) {}
    
  save(contacto: Contacto){
      return this.http.post<any>("http://localhost:8080/demoPPW/rs/clientes/crearC", contacto)
    }
  getAll(){
    return this.http.get<any>("http://localhost:8080/demoPPW/rs/clientes/all")
  } 
  delete(cedula: string) {
    return this.http.delete<any>("http://localhost:8080/demoPPW/rs/clientes/eliminarC/"+cedula);
  }

}
