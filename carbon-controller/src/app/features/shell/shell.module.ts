import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellPageComponent } from './shell-page/shell-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShellRoutingModule
  ],
  declarations: [
    ShellPageComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ShellModule { }
