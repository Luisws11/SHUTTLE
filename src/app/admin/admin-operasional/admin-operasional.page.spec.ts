import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminOperasionalPage } from './admin-operasional.page';

describe('AdminOperasionalPage', () => {
  let component: AdminOperasionalPage;
  let fixture: ComponentFixture<AdminOperasionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOperasionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
