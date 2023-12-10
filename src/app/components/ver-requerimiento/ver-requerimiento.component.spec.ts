import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRequerimientoComponent } from './ver-requerimiento.component';

describe('VerRequerimientoComponent', () => {
  let component: VerRequerimientoComponent;
  let fixture: ComponentFixture<VerRequerimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRequerimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
