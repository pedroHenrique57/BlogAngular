import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-community-card',
  standalone: true,
  imports: [],
  templateUrl: './my-community-card.component.html',
  styleUrl: './my-community-card.component.scss',
})
export class MyCommunityCardComponent {
  @Input() public linkImage: string = '';

  @Input() public CommunityName: string = '';

  @Input() public totalMembers: string = '';
}
