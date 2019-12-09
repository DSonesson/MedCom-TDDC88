import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutMethodPopupComponent } from './aut-method-popup.component';

describe('AutMethodPopupComponent', () => {
  let component: AutMethodPopupComponent;
  let fixture: ComponentFixture<AutMethodPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutMethodPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutMethodPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
