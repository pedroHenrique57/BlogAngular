import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavigationBarDesktopComponent } from './left-navigation-bar-desktop/left-navigation-bar-desktop.component';
import { MyCommunityCardComponent } from "./my-community-card/my-community-card.component";
import { UpcommingEventCardComponent } from "./upcomming-event-card/upcomming-event-card.component";
import { TopNavigationBarDesktopComponent } from './top-navigation-bar-desktop/top-navigation-bar-desktop.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, LeftNavigationBarDesktopComponent, MyCommunityCardComponent, UpcommingEventCardComponent, TopNavigationBarDesktopComponent],
  exports: [LeftNavigationBarDesktopComponent, TopNavigationBarDesktopComponent],
})
export class DesktopModule {}
