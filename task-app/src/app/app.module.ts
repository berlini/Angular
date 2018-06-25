import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBootstrapModuleModule } from './app-bootstrap-module/app-bootstrap-module.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskService } from './services/task.service';
import { TaskCalendarComponent } from './components/task-calendar/task-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateTaskComponent,
    TaskCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModuleModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
