import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesCollectionComponent } from './cases-collection.component';

describe('CasesCollectionComponent', () => {
  let component: CasesCollectionComponent;
  let fixture: ComponentFixture<CasesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
