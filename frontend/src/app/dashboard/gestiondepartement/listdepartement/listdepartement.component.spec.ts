import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepartementComponent } from './listdepartement.component';

describe('ListdepartementComponent', () => {
  let component: ListdepartementComponent;
  let fixture: ComponentFixture<ListdepartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListdepartementComponent]
    });
    fixture = TestBed.createComponent(ListdepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
