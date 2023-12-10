import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRequerimientosComponent } from './ver-requerimientos.component';

describe('VerRequerimientosComponent', () => {
  let component: VerRequerimientosComponent;
  let fixture: ComponentFixture<VerRequerimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRequerimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
