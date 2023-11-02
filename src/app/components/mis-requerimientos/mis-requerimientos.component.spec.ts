import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisRequerimientosComponent } from './mis-requerimientos.component';

describe('MisRequerimientosComponent', () => {
  let component: MisRequerimientosComponent;
  let fixture: ComponentFixture<MisRequerimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisRequerimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
