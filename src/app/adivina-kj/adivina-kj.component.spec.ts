import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaKjComponent } from './adivina-kj.component';

describe('AdivinaKjComponent', () => {
  let component: AdivinaKjComponent;
  let fixture: ComponentFixture<AdivinaKjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaKjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdivinaKjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});


