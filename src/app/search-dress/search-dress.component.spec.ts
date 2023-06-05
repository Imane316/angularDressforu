import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDressComponent } from './search-dress.component';

describe('SearchDressComponent', () => {
  let component: SearchDressComponent;
  let fixture: ComponentFixture<SearchDressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDressComponent]
    });
    fixture = TestBed.createComponent(SearchDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
