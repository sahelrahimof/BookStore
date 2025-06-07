import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbookComponent } from './detailbook.component';

describe('DetailbookComponent', () => {
  let component: DetailbookComponent;
  let fixture: ComponentFixture<DetailbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
