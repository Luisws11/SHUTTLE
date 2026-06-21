import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnerBookingPage } from './owner-booking.page';

describe('OwnerBookingPage', () => {
  let component: OwnerBookingPage;
  let fixture: ComponentFixture<OwnerBookingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
