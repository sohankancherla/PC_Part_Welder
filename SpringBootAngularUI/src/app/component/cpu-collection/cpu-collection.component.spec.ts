import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuCollectionComponent } from './cpu-collection.component';

describe('CpuCollectionComponent', () => {
  let component: CpuCollectionComponent;
  let fixture: ComponentFixture<CpuCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
