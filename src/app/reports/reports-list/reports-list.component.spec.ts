import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsListComponent } from './reports-list.component';
import {Report} from '../report';

describe('ReportsListComponent', () => {
  let component: ReportsListComponent;
  let fixture: ComponentFixture<ReportsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of reports', () => {
    const report1: Report = {id: 1, name: 'report1'};
    const report2: Report = {id: 2, name: 'report2'};
    const report3: Report = {id: 3, name: 'report3'};

    fixture.componentInstance.reports = [report1, report2, report3];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.reports > li').length)
      .toEqual(3);
  });
});
