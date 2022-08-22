import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNgComponent } from './user-ng.component';

describe('UserNgComponent', () => {
  let component: UserNgComponent;
  let fixture: ComponentFixture<UserNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
