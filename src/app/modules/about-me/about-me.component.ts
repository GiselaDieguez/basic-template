import { Component, OnInit } from '@angular/core';
import { aboutMeEnum } from '../../config/enums/aboutme.enum';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-about-me',
  imports: [MatGridListModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  public aboutMe: string;
  public aboutMeTitle: string;

  constructor() { 
    this.aboutMe = aboutMeEnum.aboutMe;
    this.aboutMeTitle = aboutMeEnum.aboutMeTitle;
  }

  ngOnInit() {
  }

}
