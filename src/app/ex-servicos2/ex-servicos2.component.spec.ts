import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExServicos2Component } from './ex-servicos2.component';

describe('ExServicos2Component', () => {
  let component: ExServicos2Component;
  let fixture: ComponentFixture<ExServicos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExServicos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExServicos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
