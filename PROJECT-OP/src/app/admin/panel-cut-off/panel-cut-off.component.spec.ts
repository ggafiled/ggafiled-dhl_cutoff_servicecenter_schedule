import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCutOffComponent } from './panel-cut-off.component';

describe('PanelCutOffComponent', () => {
  let component: PanelCutOffComponent;
  let fixture: ComponentFixture<PanelCutOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCutOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCutOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
