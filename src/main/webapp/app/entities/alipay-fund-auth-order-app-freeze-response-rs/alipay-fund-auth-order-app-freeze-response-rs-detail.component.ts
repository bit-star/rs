import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAlipayFundAuthOrderAppFreezeResponseRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-response-rs.model';

@Component({
  selector: 'jhi-alipay-fund-auth-order-app-freeze-response-rs-detail',
  templateUrl: './alipay-fund-auth-order-app-freeze-response-rs-detail.component.html'
})
export class AlipayFundAuthOrderAppFreezeResponseRsDetailComponent implements OnInit {
  alipayFundAuthOrderAppFreezeResponse: IAlipayFundAuthOrderAppFreezeResponseRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ alipayFundAuthOrderAppFreezeResponse }) => {
      this.alipayFundAuthOrderAppFreezeResponse = alipayFundAuthOrderAppFreezeResponse;
    });
  }

  previousState() {
    window.history.back();
  }
}
