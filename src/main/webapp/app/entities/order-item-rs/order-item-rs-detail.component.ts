import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOrderItemRs } from 'app/shared/model/order-item-rs.model';

@Component({
  selector: 'jhi-order-item-rs-detail',
  templateUrl: './order-item-rs-detail.component.html'
})
export class OrderItemRsDetailComponent implements OnInit {
  orderItem: IOrderItemRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ orderItem }) => {
      this.orderItem = orderItem;
    });
  }

  previousState() {
    window.history.back();
  }
}
