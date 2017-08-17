import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AwesomeDialogComponent} from './awesome-dialog/awesome-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(AwesomeDialogComponent);
  }
}
