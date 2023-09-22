import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLaboratorioComponent } from './ver-laboratorio.component';

describe('VerLaboratorioComponent', () => {
  let component: VerLaboratorioComponent;
  let fixture: ComponentFixture<VerLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerLaboratorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
