import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistories: OrderHistory[] = [];
  storage: Storage = sessionStorage;
  constructor(private orderHistoryService: OrderHistoryService) {
  }

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    const userEmail = JSON.parse(this.storage.getItem('userEmail'));
    this.orderHistoryService.getOrderHistory(userEmail).subscribe(
      data => {
        this.orderHistories = data._embedded.orders;
      }
    )
  }
}
