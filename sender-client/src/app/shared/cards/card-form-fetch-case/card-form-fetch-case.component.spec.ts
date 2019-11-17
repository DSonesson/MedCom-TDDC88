import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormFetchCaseComponent } from './card-form-fetch-case.component';

describe('CardFormFetchCaseComponent', () => {
  let component: CardFormFetchCaseComponent;
  let fixture: ComponentFixture<CardFormFetchCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormFetchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormFetchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
   */

});
