import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WormComponent } from './worm.component';

describe('WormComponent', () => {
  let component: WormComponent;
  let fixture: ComponentFixture<WormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
