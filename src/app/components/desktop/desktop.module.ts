import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavigationBarDesktopComponent } from './left-navigation-bar-desktop/left-navigation-bar-desktop.component';
import { MyCommunityCardComponent } from "./my-community-card/my-community-card.component";
import { UpcommingEventCardComponent } from "./upcomming-event-card/upcomming-event-card.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, LeftNavigationBarDesktopComponent, MyCommunityCardComponent, UpcommingEventCardComponent],
  exports: [LeftNavigationBarDesktopComponent],
})
export class DesktopModule {}
