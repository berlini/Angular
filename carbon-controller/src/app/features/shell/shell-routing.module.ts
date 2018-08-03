import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellPageComponent } from './shell-page/shell-page.component';

const routes: Routes = [
  { path: 'shell', component: ShellPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
