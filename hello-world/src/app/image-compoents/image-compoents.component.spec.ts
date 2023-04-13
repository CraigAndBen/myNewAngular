import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompoentsComponent } from './image-compoents.component';

describe('ImageCompoentsComponent', () => {
  let component: ImageCompoentsComponent;
  let fixture: ComponentFixture<ImageCompoentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCompoentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCompoentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
