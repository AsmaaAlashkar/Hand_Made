import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

const modules =[
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
];
const components =[];
const materialModules = [
    
];
const primengModules = [

];
@NgModule({
  declarations: [],
  imports: [
    ...modules,
    // ...materialModules,
    // ...primengModules
  ],
  exports: [
    ...modules,
    // ...materialModules,
    // ...primengModules
  ],
  providers:[
    MessageService,
    ConfirmationService
  ]
})
export class SharedModule { }
