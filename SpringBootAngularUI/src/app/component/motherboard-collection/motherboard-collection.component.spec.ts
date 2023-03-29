import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardCollectionComponent } from './motherboard-collection.component';

describe('MotherboardCollectionComponent', () => {
  let component: MotherboardCollectionComponent;
  let fixture: ComponentFixture<MotherboardCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
