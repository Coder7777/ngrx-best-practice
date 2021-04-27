import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent, TodoListComponent } from './components';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TodoRoutes } from './todo.routing';

const components = [
  TodoListComponent,
  TodoItemComponent
];

const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  TodoRoutes
];

@NgModule({
  declarations: [...components],
  imports: [...modules]
})
export class TodoModule { }
