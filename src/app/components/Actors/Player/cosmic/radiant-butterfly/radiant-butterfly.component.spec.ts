import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiantButterflyComponent } from './radiant-butterfly.component';

describe('RadiantButterflyComponent', () => {
  let component: RadiantButterflyComponent;
  let fixture: ComponentFixture<RadiantButterflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiantButterflyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiantButterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
