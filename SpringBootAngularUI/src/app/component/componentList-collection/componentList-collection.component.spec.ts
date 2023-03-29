import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListCollectionComponent } from './componentList-collection.component';

describe('ComponentListCollectionComponent', () => {
  let component: ComponentListCollectionComponent;
  let fixture: ComponentFixture<ComponentListCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentListCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentListCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
