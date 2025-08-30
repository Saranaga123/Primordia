import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefeatedComponent } from './defeated.component';

describe('DefeatedComponent', () => {
  let component: DefeatedComponent;
  let fixture: ComponentFixture<DefeatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefeatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefeatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
