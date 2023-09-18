import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaboratiorioComponent } from './add-laboratiorio.component';

describe('AddLaboratiorioComponent', () => {
  let component: AddLaboratiorioComponent;
  let fixture: ComponentFixture<AddLaboratiorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLaboratiorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLaboratiorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
