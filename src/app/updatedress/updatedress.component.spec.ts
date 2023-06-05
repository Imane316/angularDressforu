import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedressComponent } from './updatedress.component';

describe('UpdatedressComponent', () => {
  let component: UpdatedressComponent;
  let fixture: ComponentFixture<UpdatedressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedressComponent]
    });
    fixture = TestBed.createComponent(UpdatedressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
