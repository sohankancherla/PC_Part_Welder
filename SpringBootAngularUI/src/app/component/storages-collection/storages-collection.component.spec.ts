import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragesCollectionComponent } from './storages-collection.component';

describe('StoragesCollectionComponent', () => {
  let component: StoragesCollectionComponent;
  let fixture: ComponentFixture<StoragesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoragesCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
