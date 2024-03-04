import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavigationBarDesktopComponent } from './left-navigation-bar-desktop/left-navigation-bar-desktop.component';
import { MyCommunityCardComponent } from "./my-community-card/my-community-card.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, LeftNavigationBarDesktopComponent, MyCommunityCardComponent],
  exports: [LeftNavigationBarDesktopComponent],
})
export class DesktopModule {}
