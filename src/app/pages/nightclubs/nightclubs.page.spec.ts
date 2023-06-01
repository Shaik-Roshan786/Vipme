import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NightclubsPage } from './nightclubs.page';

describe('NightclubsPage', () => {
  let component: NightclubsPage;
  let fixture: ComponentFixture<NightclubsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NightclubsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
