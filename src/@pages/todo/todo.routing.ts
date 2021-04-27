import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './containers/todo/todo.component';

const routes: Routes = [
  { path: "list", component: TodoComponent },
  { path: "", redirectTo: "list", pathMatch: "full" }
];

export const TodoRoutes = RouterModule.forChild(routes);
