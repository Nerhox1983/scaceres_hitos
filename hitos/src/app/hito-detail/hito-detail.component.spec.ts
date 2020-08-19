import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitoDetailComponent } from './hito-detail.component';

describe('HitoDetailComponent', () => {
  let component: HitoDetailComponent;
  let fixture: ComponentFixture<HitoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
