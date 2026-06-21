import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnerProfilPage } from './owner-profil.page';

describe('OwnerProfilPage', () => {
  let component: OwnerProfilPage;
  let fixture: ComponentFixture<OwnerProfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
