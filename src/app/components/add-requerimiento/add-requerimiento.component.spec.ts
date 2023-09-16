import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequerimientoComponent } from './add-requerimiento.component';

describe('AddRequerimientoComponent', () => {
  let component: AddRequerimientoComponent;
  let fixture: ComponentFixture<AddRequerimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRequerimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
