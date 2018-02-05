import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWidget1Component } from './sample-widget1.component';

describe('SampleWidget1Component', () => {
  let component: SampleWidget1Component;
  let fixture: ComponentFixture<SampleWidget1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWidget1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWidget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
