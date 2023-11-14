import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutclientComponent } from './ajoutclient.component';

describe('AjoutclientComponent', () => {
  let component: AjoutclientComponent;
  let fixture: ComponentFixture<AjoutclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutclientComponent]
    });
    fixture = TestBed.createComponent(AjoutclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
