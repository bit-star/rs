import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOrderRs } from 'app/shared/model/order-rs.model';

@Component({
  selector: 'jhi-order-rs-detail',
  templateUrl: './order-rs-detail.component.html'
})
export class OrderRsDetailComponent implements OnInit {
  order: IOrderRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ order }) => {
      this.order = order;
    });
  }

  previousState() {
    window.history.back();
  }
}
