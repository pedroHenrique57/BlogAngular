import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcomming-event-card',
  standalone: true,
  imports: [],
  templateUrl: './upcomming-event-card.component.html',
  styleUrl: './upcomming-event-card.component.scss',
})
export class UpcommingEventCardComponent {
  protected monthNameList: string[] = ["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  @Input() public date: Date = new Date();

  @Input() public title: string = '';

  @Input() public interested: string = '';

  @Input() public going: string = '';
}
