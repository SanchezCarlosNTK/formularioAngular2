import { Injectable } from '@angular/core';
import { Pais } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private pais: Pais[];
  constructor() {
     this.pais=[
       {
       id:0,
       nombre:'Mexico',
       provincias:['CDMX','Veracruz','Nuevo Leon']
       },
       {
       id:1,
       nombre:'Argentina',
       provincias:['Mar del Plata','Santa Fe','Cordoba']
       },
       {
       id:2,
       nombre:'España',
       provincias:['Barcelona','Madrid','Murcia']
       }
     ];

   }

   getPaises(){
     return this.pais;
   }
   
 
 }
 
  

