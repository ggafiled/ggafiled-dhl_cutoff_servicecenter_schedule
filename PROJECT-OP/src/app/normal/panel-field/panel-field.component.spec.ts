import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFieldComponent } from './panel-field.component';

describe('PanelFieldComponent', () => {
  let component: PanelFieldComponent;
  let fixture: ComponentFixture<PanelFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
