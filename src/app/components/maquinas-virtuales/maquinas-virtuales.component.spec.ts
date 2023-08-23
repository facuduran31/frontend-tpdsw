import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinasVirtualesComponent } from './maquinas-virtuales.component';

describe('MaquinasVirtualesComponent', () => {
  let component: MaquinasVirtualesComponent;
  let fixture: ComponentFixture<MaquinasVirtualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinasVirtualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquinasVirtualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//hola soy un cambio