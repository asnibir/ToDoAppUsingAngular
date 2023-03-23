import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';


import { AddEditTaskComponent } from './add-edit-task.component';




@NgModule({
  declarations: [
    AddEditTaskComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    ToastModule,
    CheckboxModule,
    InputNumberModule
  ],
  exports: [
    AddEditTaskComponent,
  ]
})
export class AddEditTaskModule { }
