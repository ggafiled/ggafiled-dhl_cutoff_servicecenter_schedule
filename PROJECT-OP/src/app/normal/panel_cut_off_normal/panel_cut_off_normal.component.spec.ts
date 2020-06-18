import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCutOffNormalComponent } from './panel_cut_off_normal.component';

describe('PanelCutOffNormalComponent', () => {
  let component: PanelCutOffNormalComponent;
  let fixture: ComponentFixture<PanelCutOffNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCutOffNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCutOffNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
