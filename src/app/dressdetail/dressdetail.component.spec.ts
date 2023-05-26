import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressdetailComponent } from './dressdetail.component';

describe('DressdetailComponent', () => {
  let component: DressdetailComponent;
  let fixture: ComponentFixture<DressdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DressdetailComponent]
    });
    fixture = TestBed.createComponent(DressdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
