import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickstatsComponent } from './quickstats.component';

describe('QuickstatsComponent', () => {
  let component: QuickstatsComponent;
  let fixture: ComponentFixture<QuickstatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickstatsComponent]
    });
    fixture = TestBed.createComponent(QuickstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
