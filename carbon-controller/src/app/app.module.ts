import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';
import { LoginModule } from './features/login/login.module';
import { ErrorModule } from './shared/error/error.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // Módulo do browser
    CoreModule, // Contém os serviços e classes de negócios
    LoginModule, // Página de login
    ErrorModule, // Página de erro
    AppRoutingModule, // Contém definições de rotas da aplicação
    BrowserAnimationsModule // Módulo de animações do browser
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
