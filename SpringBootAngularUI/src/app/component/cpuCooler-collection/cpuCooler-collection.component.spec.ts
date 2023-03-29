import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuCoolerCollectionComponent } from './cpuCooler-collection.component';

describe('CpuCoolerCollectionComponent', () => {
  let component: CpuCoolerCollectionComponent;
  let fixture: ComponentFixture<CpuCoolerCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuCoolerCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuCoolerCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
