import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LapanganPage } from './lapangan.page';

describe('LapanganPage', () => {
  let component: LapanganPage;
  let fixture: ComponentFixture<LapanganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LapanganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
