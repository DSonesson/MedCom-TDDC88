import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfirmationComponent } from './card-confirmation.component';

describe('CardConfirmationComponent', () => {
  let component: CardConfirmationComponent;
  let fixture: ComponentFixture<CardConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
