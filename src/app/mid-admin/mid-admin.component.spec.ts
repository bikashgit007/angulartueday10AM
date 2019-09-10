import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidAdminComponent } from './mid-admin.component';

describe('MidAdminComponent', () => {
  let component: MidAdminComponent;
  let fixture: ComponentFixture<MidAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
