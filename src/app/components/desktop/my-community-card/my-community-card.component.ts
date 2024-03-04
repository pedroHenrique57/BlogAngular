import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-community-card',
  standalone: true,
  imports: [],
  templateUrl: './my-community-card.component.html',
  styleUrl: './my-community-card.component.scss',
})
export class MyCommunityCardComponent {
  @Input() public linkFoto: string = '';

  @Input() public nomeComunidade: string = '';

  @Input() public membrosTotais: string = '';
}
