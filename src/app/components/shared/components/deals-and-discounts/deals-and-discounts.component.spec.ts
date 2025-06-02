import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsAndDiscountsComponent } from './deals-and-discounts.component';

describe('DealsAndDiscountsComponent', () => {
  let component: DealsAndDiscountsComponent;
  let fixture: ComponentFixture<DealsAndDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealsAndDiscountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealsAndDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
