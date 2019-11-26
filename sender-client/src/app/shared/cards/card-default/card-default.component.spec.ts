import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDefaultComponent } from './card-default.component';
import {LightboxModule} from "ngx-lightbox";
import {MatIconModule} from "@angular/material/icon";

describe('CardDefaultComponent', () => {
  let component: CardDefaultComponent;
  let fixture: ComponentFixture<CardDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LightboxModule, MatIconModule],
      declarations: [ CardDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
