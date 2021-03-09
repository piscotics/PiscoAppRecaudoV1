import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPagoPage } from './lista-pago.page';

describe('ListaPagoPage', () => {
  let component: ListaPagoPage;
  let fixture: ComponentFixture<ListaPagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPagoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
