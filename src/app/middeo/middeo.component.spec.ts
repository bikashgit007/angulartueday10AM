import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddeoComponent } from './middeo.component';

describe('MiddeoComponent', () => {
  let component: MiddeoComponent;
  let fixture: ComponentFixture<MiddeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
