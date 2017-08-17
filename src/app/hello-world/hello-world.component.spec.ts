import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HelloWorldComponent} from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display hello world works text', () => {
    expect(fixture.nativeElement.querySelector('#greeting').textContent.trim())
      .toEqual('hello-world works!');
  });

  it('should be display greeting message', () => {
    component.greetingMessage = 'Welcome';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#greeting').textContent.trim())
      .toEqual('Welcome');
  });
});
