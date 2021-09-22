import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {PaisesService} from './paises.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { Form2Component } from './form2/form2.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Form2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
        ReactiveFormsModule 
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
