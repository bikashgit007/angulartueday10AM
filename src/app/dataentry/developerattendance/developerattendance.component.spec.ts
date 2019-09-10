import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperattendanceComponent } from './developerattendance.component';

describe('DeveloperattendanceComponent', () => {
  let component: DeveloperattendanceComponent;
  let fixture: ComponentFixture<DeveloperattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
