import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorPageComponent],
  bootstrap: [ErrorPageComponent]
})
export class ErrorModule { }
