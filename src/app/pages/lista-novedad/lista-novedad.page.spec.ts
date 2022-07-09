import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaNovedadPage } from './lista-novedad.page';

describe('ListaNovedadPage', () => {
  let component: ListaNovedadPage;
  let fixture: ComponentFixture<ListaNovedadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNovedadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNovedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
