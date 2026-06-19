import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminProfilPage } from './admin-profil.page';

describe('AdminProfilPage', () => {
  let component: AdminProfilPage;
  let fixture: ComponentFixture<AdminProfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
