import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCostomizadoComponent } from './pipe-costomizado.component';

describe('PipeCostomizadoComponent', () => {
  let component: PipeCostomizadoComponent;
  let fixture: ComponentFixture<PipeCostomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCostomizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCostomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
