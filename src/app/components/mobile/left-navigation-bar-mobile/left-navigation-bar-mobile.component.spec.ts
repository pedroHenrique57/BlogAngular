import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigationBarMobileComponent } from './left-navigation-bar-mobile.component';

describe('LeftNavigationBarMobileComponent', () => {
  let component: LeftNavigationBarMobileComponent;
  let fixture: ComponentFixture<LeftNavigationBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftNavigationBarMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftNavigationBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
