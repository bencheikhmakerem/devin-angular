import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevinComponent } from './devin.component';

describe('DevinComponent', () => {
  let component: DevinComponent;
  let fixture: ComponentFixture<DevinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
