import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnerPendapatanPage } from './owner-pendapatan.page';

describe('OwnerPendapatanPage', () => {
  let component: OwnerPendapatanPage;
  let fixture: ComponentFixture<OwnerPendapatanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPendapatanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
