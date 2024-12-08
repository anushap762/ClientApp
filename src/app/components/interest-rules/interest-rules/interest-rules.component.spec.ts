import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRulesComponent } from './interest-rules.component';

describe('InterestRulesComponent', () => {
  let component: InterestRulesComponent;
  let fixture: ComponentFixture<InterestRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
