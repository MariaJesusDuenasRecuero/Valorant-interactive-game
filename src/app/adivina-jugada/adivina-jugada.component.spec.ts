import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaJugadaComponent } from './adivina-jugada.component';

describe('AdivinaJugadaComponent', () => {
  let component: AdivinaJugadaComponent;
  let fixture: ComponentFixture<AdivinaJugadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaJugadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdivinaJugadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
