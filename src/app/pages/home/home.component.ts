import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { DesktopModule } from '../../components/desktop/desktop.module';
import { MobileModule } from '../../components/mobile/mobile.module';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NgSwitch, NgSwitchCase, DesktopModule, MobileModule],
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  protected isDesktopScreenSize?: Boolean;

  ngOnInit(): void {
    if (window.screen.width < 768) {
      this.isDesktopScreenSize = false;
    } else {
      this.isDesktopScreenSize = true;
    }

    this.renderer.listen('window', 'resize', () => {
      if (window.screen.width < 768) {
        this.isDesktopScreenSize = false;
      } else {
        this.isDesktopScreenSize = true;
      }
    });
  }
}
