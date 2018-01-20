import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorWrapperComponent } from './anchor-wrapper.component';

describe('AnchorWrapperComponent', () => {
  let component: AnchorWrapperComponent;
  let fixture: ComponentFixture<AnchorWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
