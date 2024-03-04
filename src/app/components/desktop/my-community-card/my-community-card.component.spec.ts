import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommunityCardComponent } from './my-community-card.component';

describe('MyCommunityCardComponent', () => {
  let component: MyCommunityCardComponent;
  let fixture: ComponentFixture<MyCommunityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCommunityCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCommunityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
