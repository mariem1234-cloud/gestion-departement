import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionemployeeComponent } from './gestionemployee.component';

describe('GestionemployeeComponent', () => {
  let component: GestionemployeeComponent;
  let fixture: ComponentFixture<GestionemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionemployeeComponent]
    });
    fixture = TestBed.createComponent(GestionemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
