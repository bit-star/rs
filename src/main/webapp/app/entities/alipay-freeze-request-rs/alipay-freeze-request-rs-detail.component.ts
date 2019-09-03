import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAlipayFreezeRequestRs } from 'app/shared/model/alipay-freeze-request-rs.model';

@Component({
  selector: 'jhi-alipay-freeze-request-rs-detail',
  templateUrl: './alipay-freeze-request-rs-detail.component.html'
})
export class AlipayFreezeRequestRsDetailComponent implements OnInit {
  alipayFreezeRequest: IAlipayFreezeRequestRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ alipayFreezeRequest }) => {
      this.alipayFreezeRequest = alipayFreezeRequest;
    });
  }

  previousState() {
    window.history.back();
  }
}
