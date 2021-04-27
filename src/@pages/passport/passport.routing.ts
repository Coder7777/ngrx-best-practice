import { Routes, RouterModule } from '@angular/router';
import { CaptchaComponent, PasswordComponent, UserCenterComponent } from './components';

const routes: Routes = [
  { path: "captcha", component: CaptchaComponent },
  { path: "password", component: PasswordComponent },
  { path: "user-center", component: UserCenterComponent },
  { path: "", redirectTo: "password", pathMatch: "full" }
];

export const PassportRoutes = RouterModule.forChild(routes);
