import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaRazeComponent } from './adivina-raze.component';

describe('AdivinaRazeComponent', () => {
  let component: AdivinaRazeComponent;
  let fixture: ComponentFixture<AdivinaRazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaRazeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdivinaRazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
