import { Component, OnInit } from '@angular/core';
import { PaisesService } from './../paises.service';
import { Pais } from './../app.model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private paisesService: PaisesService, formBuilder: FormBuilder) {
 
    this.form = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      provincia: ['', [Validators.required]]
    });
   }

 form;
  paises:Pais[]=this.paisesService.getPaises();
  seleccionado:number=0;
   provincias:string[]=[];
   provincia:string='';
  
  
  
  mostrarProv(){
    console.log(this.provincia);
    
  }
  getProvincias(index:number){
       let prov=this.paises[index].provincias;
       console.log(prov);
       this.provincias=prov;
  }
  
   submit() {
    if (this.form.valid) {
      console.log(this.form.value)
      
    }
    else{
      alert("Favor de llenar todos los campos")
     
    }
  }

  

  
 

  
  ngOnInit(): void {
 
  }
 




}
