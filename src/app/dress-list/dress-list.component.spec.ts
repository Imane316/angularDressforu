import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressListComponent } from './dress-list.component';

describe('DressListComponent', () => {
  let component: DressListComponent;
  let fixture: ComponentFixture<DressListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DressListComponent]
    });
    fixture = TestBed.createComponent(DressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
