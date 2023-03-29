import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupplyCollectionComponent } from './powerSupply-collection.component';

describe('CasesCollectionComponent', () => {
  let component: PowerSupplyCollectionComponent;
  let fixture: ComponentFixture<PowerSupplyCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerSupplyCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSupplyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
