import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopStackComponent } from './develop-stack.component';

describe('DevelopStackComponent', () => {
  let component: DevelopStackComponent;
  let fixture: ComponentFixture<DevelopStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevelopStackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
