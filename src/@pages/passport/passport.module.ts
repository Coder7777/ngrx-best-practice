import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportComponent } from './containers/passport/passport.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CaptchaComponent, PasswordComponent, UserCenterComponent } from './components';
import { PassportRoutes } from './passport.routing';

const components = [
  PasswordComponent,
  CaptchaComponent,
  UserCenterComponent,
  PassportComponent
]

const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  PassportRoutes
]


@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class PassportModule { }
