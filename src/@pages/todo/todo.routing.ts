import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoComponent } from './containers/todo/todo.component';

const routes: Routes = [
  { path: "list", component: TodoComponent },
  { path: "list/:id", component: TodoDetailComponent },
  { path: "", redirectTo: "list", pathMatch: "full" }
];

export const TodoRoutesModule = RouterModule.forChild(routes);
