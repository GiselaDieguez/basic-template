import { Component, OnInit } from '@angular/core';
import { appointmentEnum } from '../../config/enums/appointment.enum';

@Component({
  selector: 'app-appointment',
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public appointmentTitle: string;
  public appointmentUrl: string;

  constructor() {
    this.appointmentTitle = appointmentEnum.appointmentTitle;
    this.appointmentUrl = appointmentEnum.appointmentUrl;
  }
  
  ngOnInit() {
    console.log('AppointmentComponent initialized');
  }

}