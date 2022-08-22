import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForComponentComponent } from './ng-for-component.component';

describe('NgForComponentComponent', () => {
  let component: NgForComponentComponent;
  let fixture: ComponentFixture<NgForComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
