import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoginFormComponent } from './users-login-form.component';

describe('UsersLoginFormComponent', () => {
  let component: UsersLoginFormComponent;
  let fixture: ComponentFixture<UsersLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
