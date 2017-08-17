import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ReportsListComponent} from './reports/reports-list/reports-list.component';
import {AwesomeDialogComponent} from './awesome-dialog/awesome-dialog.component';
import {MdDialogActions, MdDialogClose, MdDialogContent, MdDialogModule, MdDialogTitle} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ReportsListComponent,
    AwesomeDialogComponent
  ],
  entryComponents: [AwesomeDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdDialogModule,
    BrowserAnimationsModule,
    // MdDialogTitle,
    // MdDialogClose,
    // MdDialogContent,
    // MdDialogActions,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
