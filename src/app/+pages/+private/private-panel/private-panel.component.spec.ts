import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePanelComponent } from './private-panel.component';

describe('PrivatePanelComponent', () => {
  let component: PrivatePanelComponent;
  let fixture: ComponentFixture<PrivatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
