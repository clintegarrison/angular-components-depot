import { NgModule } from '@angular/core';
import ButtonComponent from './button.component';
import { NgClass, NgStyle } from '@angular/common';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    NgClass,
    NgStyle
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }