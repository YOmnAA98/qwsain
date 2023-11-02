import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionarySectionComponent } from './dictionary-section.component';

describe('DictionarySectionComponent', () => {
  let component: DictionarySectionComponent;
  let fixture: ComponentFixture<DictionarySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DictionarySectionComponent]
    });
    fixture = TestBed.createComponent(DictionarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
