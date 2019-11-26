import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaseNumberComponent } from './card-case-number.component';

describe('CardCaseNumberComponent', () => {
  let component: CardCaseNumberComponent;
  let fixture: ComponentFixture<CardCaseNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCaseNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
