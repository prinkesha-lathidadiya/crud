import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesNgComponent } from './pipes-ng.component';

describe('PipesNgComponent', () => {
  let component: PipesNgComponent;
  let fixture: ComponentFixture<PipesNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
