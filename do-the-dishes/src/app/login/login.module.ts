import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [LoginPageComponent]
})
export class LoginModule { }
