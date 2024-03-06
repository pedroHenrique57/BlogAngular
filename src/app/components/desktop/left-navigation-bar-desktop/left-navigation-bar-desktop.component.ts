import { Component } from '@angular/core';
import { MyCommunityCardComponent } from '../my-community-card/my-community-card.component';
import { UpcommingEventCardComponent } from '../upcomming-event-card/upcomming-event-card.component';

@Component({
  selector: 'app-left-navigation-bar-desktop',
  standalone: true,
  imports: [MyCommunityCardComponent, UpcommingEventCardComponent],
  templateUrl: './left-navigation-bar-desktop.component.html',
  styleUrl: './left-navigation-bar-desktop.component.scss',
})
export class LeftNavigationBarDesktopComponent {
  //  Variables related to My Community Card

  protected linkImage: string = '../../../../assets/Img/20240109_202416.jpg';

  protected CommunityName: string[] = ['1', '2', '3'];

  protected totalMembers: string[] = ['1', '2', '3'];

  // Variables related to Upcoming event

  public date: Date = new Date(2024, 1, 1, 12, 30, 0);

  public title: string = 'AA';

  public interested: string = 'BB';

  public going: string = 'CC';
}
