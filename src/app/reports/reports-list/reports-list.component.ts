import {Component, Input, OnInit} from '@angular/core';
import {Report} from '../report';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  @Input() reports: Report[];

  constructor() { }

  ngOnInit() {
  }

}
