import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLaporanPage } from './admin-laporan.page';

describe('AdminLaporanPage', () => {
  let component: AdminLaporanPage;
  let fixture: ComponentFixture<AdminLaporanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLaporanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
