import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCollectionComponent } from './memory-collection.component';

describe('MemoryCollectionComponent', () => {
  let component: MemoryCollectionComponent;
  let fixture: ComponentFixture<MemoryCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
