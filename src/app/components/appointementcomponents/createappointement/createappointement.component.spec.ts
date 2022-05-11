import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateappointementComponent } from './createappointement.component';

describe('CreateappointementComponent', () => {
  let component: CreateappointementComponent;
  let fixture: ComponentFixture<CreateappointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateappointementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateappointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
