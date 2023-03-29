import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardCollectionComponent } from './videoCard-collection.component';

describe('VideoCardCollectionComponent', () => {
  let component: VideoCardCollectionComponent;
  let fixture: ComponentFixture<VideoCardCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
