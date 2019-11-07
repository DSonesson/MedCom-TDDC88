import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTmplComponent } from './card-tmpl.component';

describe('CardTmplComponent', () => {
  let component: CardTmplComponent;
  let fixture: ComponentFixture<CardTmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
