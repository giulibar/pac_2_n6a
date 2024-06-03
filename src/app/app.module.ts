import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsignaComponent } from './consigna/consigna.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from './todos.service';
import { TodosComponent } from './todos/todos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    ConsignaComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, CommonModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
