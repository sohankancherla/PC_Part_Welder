import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCollectionComponent } from './users-collection.component';

describe('UsersCollectionComponent', () => {
  let component: UsersCollectionComponent;
  let fixture: ComponentFixture<UsersCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
