import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

const components = [
  PageComponent,
  HeaderComponent,
  ContentComponent,
  FooterComponent
]

const modules = [
  CommonModule,
  IonicModule
];

@NgModule({
  imports: [...modules],
  declarations: [...components],
  exports: [...components]
})
export class LayoutModule { }
