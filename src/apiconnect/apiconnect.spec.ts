import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apiconnect } from './apiconnect';

describe('Apiconnect', () => {
  let component: Apiconnect;
  let fixture: ComponentFixture<Apiconnect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apiconnect],
    }).compileComponents();

    fixture = TestBed.createComponent(Apiconnect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
