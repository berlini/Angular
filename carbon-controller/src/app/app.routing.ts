import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginPageComponent } from './features/login/login-page/login-page.component';
import { ErrorPageComponent } from './shared/error/error-page/error-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginPageComponent },
  
  // Página de erro 404. Deve sempre ser a última no array
  { path: '**', component: ErrorPageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);