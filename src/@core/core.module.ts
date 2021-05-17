import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

const modules = [
  LayoutModule
];

@NgModule({
  imports: [...modules],
  declarations: []
})
export class CoreModule { }
