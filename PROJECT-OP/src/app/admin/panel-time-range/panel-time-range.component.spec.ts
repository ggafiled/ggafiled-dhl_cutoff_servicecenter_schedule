import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTimeRangeComponent } from './panel-time-range.component';

describe('PanelTimeRangeComponent', () => {
  let component: PanelTimeRangeComponent;
  let fixture: ComponentFixture<PanelTimeRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTimeRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTimeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
