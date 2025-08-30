import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoonComponent } from './cocoon.component';

describe('CocoonComponent', () => {
  let component: CocoonComponent;
  let fixture: ComponentFixture<CocoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
