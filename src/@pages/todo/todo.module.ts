import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/@core/layout/layout.module';
import { TodoRoutesModule } from './todo.routing';

import { TodoItemComponent, TodoListComponent, TodoDetailComponent, TodoComponent } from '.';

import { EnumPipe } from 'src/@share/pipes/index';
import { ShareModule } from 'src/@share/share.module';

const components = [
  TodoListComponent,
  TodoItemComponent,
  TodoDetailComponent,
  TodoComponent
];

const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  TodoRoutesModule,
  LayoutModule,
  ShareModule
];

const pipes = [
  EnumPipe
];

@NgModule({
  declarations: [...components],
  providers: [...pipes],
  imports: [...modules]
})
export class TodoModule { }
