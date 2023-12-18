import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallComponent } from './api-call.component';

describe('ApiCallComponent', () => {
  let component: ApiCallComponent;
  let fixture: ComponentFixture<ApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
