import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailLapanganPage } from './detail-lapangan.page';

describe('DetailLapanganPage', () => {
  let component: DetailLapanganPage;
  let fixture: ComponentFixture<DetailLapanganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLapanganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
