import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchcaseComponent } from './fetchcase.component';

describe('FetchcaseComponent', () => {
  let component: FetchcaseComponent;
  let fixture: ComponentFixture<FetchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
