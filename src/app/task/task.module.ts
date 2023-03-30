import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button'
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { initialState, tasksReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

import { TaskComponent } from './task.component';
import { AddEditTaskModule } from './add-edit-task/add-edit-task.module';
import { TasksEffects } from './store/effetcs';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    AccordionModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    AddEditTaskModule,
    ConfirmDialogModule,
    //StoreModule.forFeature(taskFeatureKey, tasksReducer, { initialState: initialState }),
    //StoreModule.forRoot({ taskFeatureKey: tasksReducer } as ActionReducerMap<any,any>),
    StoreModule.forFeature('tasks', tasksReducer),
    EffectsModule.forFeature([TasksEffects]),
  ],
  exports: [
    TaskComponent
  ],
  providers: [MessageService, ConfirmationService, TaskService]
})
export class TaskModule { }
