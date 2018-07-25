import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ErrorPageComponent } from './shared/error/error-page/error-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  
  // Página de erro 404. Deve sempre ser a última no array
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}