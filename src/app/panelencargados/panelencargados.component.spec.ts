import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelencargadosComponent } from './panelencargados.component';

describe('PanelencargadosComponent', () => {
  let component: PanelencargadosComponent;
  let fixture: ComponentFixture<PanelencargadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelencargadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelencargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
