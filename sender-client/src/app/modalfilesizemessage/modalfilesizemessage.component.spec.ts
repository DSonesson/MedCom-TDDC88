import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalfilesizemessageComponent } from './modalfilesizemessage.component';

describe('ModalfilesizemessageComponent', () => {
  let component: ModalfilesizemessageComponent;
  let fixture: ComponentFixture<ModalfilesizemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalfilesizemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalfilesizemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
