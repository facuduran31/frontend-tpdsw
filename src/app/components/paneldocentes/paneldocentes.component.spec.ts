import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneldocentesComponent } from './paneldocentes.component';

describe('PaneldocentesComponent', () => {
  let component: PaneldocentesComponent;
  let fixture: ComponentFixture<PaneldocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneldocentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaneldocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
