import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivatebookingsPage } from './privatebookings.page';

describe('PrivatebookingsPage', () => {
  let component: PrivatebookingsPage;
  let fixture: ComponentFixture<PrivatebookingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivatebookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
