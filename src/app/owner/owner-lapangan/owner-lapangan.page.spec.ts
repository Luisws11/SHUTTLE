import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnerLapanganPage } from './owner-lapangan.page';

describe('OwnerLapanganPage', () => {
  let component: OwnerLapanganPage;
  let fixture: ComponentFixture<OwnerLapanganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerLapanganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
