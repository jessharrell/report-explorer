import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsListComponent } from './reports-list.component';

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
    fixture.componentInstance.reports = [{id: 1, name: 'report1'}];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#reports').textContent.trim())
      .toEqual('report1');
  });
});
