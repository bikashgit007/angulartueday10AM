import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperConfigComponent } from './developer-config.component';

describe('DeveloperConfigComponent', () => {
  let component: DeveloperConfigComponent;
  let fixture: ComponentFixture<DeveloperConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
