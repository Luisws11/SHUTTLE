import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingLapanganPage } from './booking-lapangan.page';

describe('BookingLapanganPage', () => {
  let component: BookingLapanganPage;
  let fixture: ComponentFixture<BookingLapanganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingLapanganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
