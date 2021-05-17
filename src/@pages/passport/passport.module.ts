import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PassportComponent, CaptchaComponent, PasswordComponent, UserCenterComponent } from './index';
import { PassportRoutesModule } from './passport.routing';

const components = [
  PassportComponent,
  PasswordComponent,
  CaptchaComponent,
  UserCenterComponent
]

const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  PassportRoutesModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class PassportModule { }
