import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeDialogComponent } from './awesome-dialog.component';

describe('AwesomeDialogComponent', () => {
  let component: AwesomeDialogComponent;
  let fixture: ComponentFixture<AwesomeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
