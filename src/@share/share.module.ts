import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EnumPipe } from './pipes';

const components = [
];

const pipes = [
  EnumPipe
];

const modules = [
  CommonModule,
  IonicModule
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components, ...pipes]
})
export class ShareModule { }
