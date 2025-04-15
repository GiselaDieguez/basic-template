import { Component, OnInit } from '@angular/core';
import { headlineEnum } from '../../config/enums/headline.enum';

@Component({
  selector: 'app-headline',
  imports: [],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss'
})
export class HeadlineComponent implements OnInit {
  public nameLastname: string;
  public licenseNumber: number;

  constructor() { 
    this.nameLastname = headlineEnum.nameLastname;
    this.licenseNumber = headlineEnum.licenseNumber
  }

  scrollToAppointment() {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit() {}

}
