import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "todo", loadChildren: () => import("../@pages/todo/todo.module").then(m => m.TodoModule) },
  { path: "passport", loadChildren: () => import("../@pages/passport/passport.module").then(m => m.PassportModule) },
  { path: "", redirectTo: "passport", pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
