import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgComponent } from './directive-ng.component';

describe('DirectiveNgComponent', () => {
  let component: DirectiveNgComponent;
  let fixture: ComponentFixture<DirectiveNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
