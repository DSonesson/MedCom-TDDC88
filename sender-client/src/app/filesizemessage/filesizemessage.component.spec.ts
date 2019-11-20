import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesizemessageComponent } from './filesizemessage.component';

describe('FilesizemessageComponent', () => {
  let component: FilesizemessageComponent;
  let fixture: ComponentFixture<FilesizemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesizemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesizemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
