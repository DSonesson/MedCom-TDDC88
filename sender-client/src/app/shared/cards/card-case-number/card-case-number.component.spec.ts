import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaseNumber } from './card-case-number.component';

describe('CardCaseNumber', () => {
  let component: CardCaseNumber;
  let fixture: ComponentFixture<CardCaseNumber>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCaseNumber ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaseNumber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
