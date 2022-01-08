import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekboxComponent } from './chekbox.component';

describe('ChekboxComponent', () => {
  let component: ChekboxComponent;
  let fixture: ComponentFixture<ChekboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChekboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
