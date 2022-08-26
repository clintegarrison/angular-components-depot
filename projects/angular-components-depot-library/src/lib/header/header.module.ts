import { NgModule } from '@angular/core';
import HeaderComponent from './header.component';
import { ButtonModule} from '../button/button.module';
import { NgClass, NgStyle, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    NgClass,
    NgStyle,
    NgIf,
    ButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule{ }
