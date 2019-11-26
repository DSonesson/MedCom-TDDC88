import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageComponent } from './card-image.component';
import {LightboxModule} from "ngx-lightbox";

describe('CardImageComponent', () => {
  let component: CardImageComponent;
  let fixture: ComponentFixture<CardImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LightboxModule],
      declarations: [ CardImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
