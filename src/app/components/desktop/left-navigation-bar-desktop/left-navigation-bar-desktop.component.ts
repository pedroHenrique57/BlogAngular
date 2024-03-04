import { Component } from '@angular/core';
import { MyCommunityCardComponent } from '../my-community-card/my-community-card.component';

@Component({
  selector: 'app-left-navigation-bar-desktop',
  standalone: true,
  imports: [MyCommunityCardComponent],
  templateUrl: './left-navigation-bar-desktop.component.html',
  styleUrl: './left-navigation-bar-desktop.component.scss',
})
export class LeftNavigationBarDesktopComponent {
  protected linkFoto:string = "../../../../assets/Img/20240109_202416.jpg"

  protected nomeComunidade: string[] = ['1', '2', '3'];

  protected membrosTotais: string[] = ['1', '2', '3'];
}
