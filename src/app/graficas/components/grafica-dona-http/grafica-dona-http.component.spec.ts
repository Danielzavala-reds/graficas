import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaDonaHttpComponent } from './grafica-dona-http.component';

describe('GraficaDonaHttpComponent', () => {
  let component: GraficaDonaHttpComponent;
  let fixture: ComponentFixture<GraficaDonaHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaDonaHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaDonaHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
