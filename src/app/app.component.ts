import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from "./modules/headline/headline.component";
import { AboutMeComponent } from "./modules/about-me/about-me.component";
import { AppointmentComponent } from "./modules/appointment/appointment.component";

import { ContactsComponent } from "./modules/contacts/contacts.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadlineComponent, AboutMeComponent, AppointmentComponent,  ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic-template';
}
