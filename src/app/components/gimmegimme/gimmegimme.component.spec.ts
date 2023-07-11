import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimmegimmeComponent } from './gimmegimme.component';

describe('GimmegimmeComponent', () => {
  let component: GimmegimmeComponent;
  let fixture: ComponentFixture<GimmegimmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GimmegimmeComponent]
    });
    fixture = TestBed.createComponent(GimmegimmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
