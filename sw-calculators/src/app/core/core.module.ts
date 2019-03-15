import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderPageComponent,
    FooterPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderPageComponent,
    FooterPageComponent
  ]
})
export class CoreModule { }
