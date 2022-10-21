import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaJettComponent } from './adivina-jett.component';

describe('AdivinaJettComponent', () => {
  let component: AdivinaJettComponent;
  let fixture: ComponentFixture<AdivinaJettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaJettComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdivinaJettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
