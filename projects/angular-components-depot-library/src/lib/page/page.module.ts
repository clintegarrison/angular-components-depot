import { NgModule } from '@angular/core';
import PageComponent from './page.component';
import { HeaderModule} from '../header/header.module';
import { NgClass, NgStyle } from '@angular/common';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    NgClass,
    NgStyle,
    HeaderModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
