import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelServiceCenterNormalComponent } from './panel_service_center_normal.component';

describe('PanelServiceCenterNormalComponent', () => {
  let component: PanelServiceCenterNormalComponent;
  let fixture: ComponentFixture<PanelServiceCenterNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelServiceCenterNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelServiceCenterNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
