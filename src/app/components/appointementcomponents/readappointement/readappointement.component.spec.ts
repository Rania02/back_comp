import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadappointementComponent } from './readappointement.component';

describe('ReadappointementComponent', () => {
  let component: ReadappointementComponent;
  let fixture: ComponentFixture<ReadappointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadappointementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadappointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
