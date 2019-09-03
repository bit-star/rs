import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAlipayFundAuthOrderAppFreezeModelRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';

@Component({
  selector: 'jhi-alipay-fund-auth-order-app-freeze-model-rs-detail',
  templateUrl: './alipay-fund-auth-order-app-freeze-model-rs-detail.component.html'
})
export class AlipayFundAuthOrderAppFreezeModelRsDetailComponent implements OnInit {
  alipayFundAuthOrderAppFreezeModel: IAlipayFundAuthOrderAppFreezeModelRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ alipayFundAuthOrderAppFreezeModel }) => {
      this.alipayFundAuthOrderAppFreezeModel = alipayFundAuthOrderAppFreezeModel;
    });
  }

  previousState() {
    window.history.back();
  }
}
