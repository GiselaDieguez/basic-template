import { Component, OnInit } from '@angular/core';
import { aboutMeEnum } from '../../config/enums/aboutme.enum';
import { MatGridListModule } from '@angular/material/grid-list';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  imports: [MatGridListModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  public aboutMe: string;
  public aboutMeTitle: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    this.aboutMe = aboutMeEnum.aboutMe;
    this.aboutMeTitle = aboutMeEnum.aboutMeTitle;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
      });
    }
  }

}
