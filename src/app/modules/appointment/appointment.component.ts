import { Component, OnInit } from '@angular/core';
import { appointmentEnum } from '../../config/enums/appointment.enum';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-appointment',
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public appointmentTitle: string;
  public appointmentUrl: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.appointmentTitle = appointmentEnum.appointmentTitle;
    this.appointmentUrl = appointmentEnum.appointmentUrl;
  }
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
      });
    }
  }

}