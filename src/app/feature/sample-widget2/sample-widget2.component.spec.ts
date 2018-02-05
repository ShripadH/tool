import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWidget2Component } from './sample-widget2.component';

describe('SampleWidget2Component', () => {
  let component: SampleWidget2Component;
  let fixture: ComponentFixture<SampleWidget2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWidget2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWidget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
