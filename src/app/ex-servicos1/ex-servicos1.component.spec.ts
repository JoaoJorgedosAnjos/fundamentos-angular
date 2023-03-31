import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExServicos1Component } from './ex-servicos1.component';

describe('ExServicos1Component', () => {
  let component: ExServicos1Component;
  let fixture: ComponentFixture<ExServicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExServicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExServicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
