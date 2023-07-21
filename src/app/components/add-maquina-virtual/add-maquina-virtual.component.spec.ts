import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaquinaVirtualComponent } from './add-maquina-virtual.component';

describe('AddMaquinaVirtualComponent', () => {
  let component: AddMaquinaVirtualComponent;
  let fixture: ComponentFixture<AddMaquinaVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaquinaVirtualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaquinaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
