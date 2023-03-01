import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitComponent } from './ng-swit.component';

describe('NgSwitComponent', () => {
  let component: NgSwitComponent;
  let fixture: ComponentFixture<NgSwitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
