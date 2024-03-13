import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationBarDesktopComponent } from './top-navigation-bar-desktop.component';

describe('TopNavigationBarDesktopComponent', () => {
  let component: TopNavigationBarDesktopComponent;
  let fixture: ComponentFixture<TopNavigationBarDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavigationBarDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavigationBarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
