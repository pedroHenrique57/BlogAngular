import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingEventCardComponent } from './upcomming-event-card.component';

describe('UpcommingEventCardComponent', () => {
  let component: UpcommingEventCardComponent;
  let fixture: ComponentFixture<UpcommingEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcommingEventCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcommingEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
