import { Component } from '@angular/core';
import { contactsEnum } from '../../config/enums/contacts.enum';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  public paymentsTitle: String = contactsEnum.paymentsTitle;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
      });
    }
  }
}
