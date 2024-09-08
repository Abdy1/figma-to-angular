import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropableAreaComponent } from './dropable-area.component';

describe('DropableAreaComponent', () => {
  let component: DropableAreaComponent;
  let fixture: ComponentFixture<DropableAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropableAreaComponent]
    });
    fixture = TestBed.createComponent(DropableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
