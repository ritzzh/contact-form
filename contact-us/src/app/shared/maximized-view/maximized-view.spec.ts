import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximizedView } from './maximized-view';

describe('MaximizedView', () => {
  let component: MaximizedView;
  let fixture: ComponentFixture<MaximizedView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaximizedView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaximizedView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
