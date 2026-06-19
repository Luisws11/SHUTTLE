import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLapanganPage } from './admin-lapangan.page';

describe('AdminLapanganPage', () => {
  let component: AdminLapanganPage;
  let fixture: ComponentFixture<AdminLapanganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLapanganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
