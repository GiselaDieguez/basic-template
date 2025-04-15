import { Component } from '@angular/core';
import { paymentsEnum } from '../../config/enums/payments.enum';

@Component({
  selector: 'app-payments',
  imports: [],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  public paymentsTitle: String = paymentsEnum.paymentsTitle;
}
