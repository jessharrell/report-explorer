import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ReportsListComponent} from './reports/reports-list/reports-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ReportsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
