import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPrincipalPage } from './menu-principal.page';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { AlarmaService } from 'src/app/core/services/alarma.service';
import { DatabaseService } from 'src/app/core/services/database.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MenuPrincipalPage', () => {
  let component: MenuPrincipalPage;
  let fixture: ComponentFixture<MenuPrincipalPage>;

  const DatabaseServiceMock = {
    fetchUsuarioActual: () => { },
    obtenerAlarmas: () => { },
    cambiarEstadoAlarma: () => { }
  };

  //constructor(private router: Router, private menucontroller: MenuController, private db:DatabaseService, private alarmaService:AlarmaService)
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPrincipalPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        MenuController,
        AlarmaService,
        Router,
        { provide: DatabaseService, useValue: DatabaseServiceMock }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
