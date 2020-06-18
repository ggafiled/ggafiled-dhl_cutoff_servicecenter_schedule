import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelServiveCenterComponent } from './panel-service-center.component';

describe('PanelServiveCenterComponent', () => {
  let component: PanelServiveCenterComponent;
  let fixture: ComponentFixture<PanelServiveCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelServiveCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelServiveCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
