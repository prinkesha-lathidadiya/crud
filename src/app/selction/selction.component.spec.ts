import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctionComponent } from './selction.component';

describe('SelctionComponent', () => {
  let component: SelctionComponent;
  let fixture: ComponentFixture<SelctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
