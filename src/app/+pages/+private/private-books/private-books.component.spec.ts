import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateBooksComponent } from './private-books.component';

describe('PrivateBooksComponent', () => {
  let component: PrivateBooksComponent;
  let fixture: ComponentFixture<PrivateBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
