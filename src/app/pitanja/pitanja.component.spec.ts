import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjaComponent } from './pitanja.component';

describe('PitanjaComponent', () => {
  let component: PitanjaComponent;
  let fixture: ComponentFixture<PitanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitanjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PitanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
