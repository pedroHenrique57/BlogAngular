import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigationBarDesktopComponent } from './left-navigation-bar-desktop.component';

describe('LeftNavigationBarDesktopComponent', () => {
  let component: LeftNavigationBarDesktopComponent;
  let fixture: ComponentFixture<LeftNavigationBarDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftNavigationBarDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftNavigationBarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
