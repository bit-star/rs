import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAlipayFreezeResponseRs } from 'app/shared/model/alipay-freeze-response-rs.model';

@Component({
  selector: 'jhi-alipay-freeze-response-rs-detail',
  templateUrl: './alipay-freeze-response-rs-detail.component.html'
})
export class AlipayFreezeResponseRsDetailComponent implements OnInit {
  alipayFreezeResponse: IAlipayFreezeResponseRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ alipayFreezeResponse }) => {
      this.alipayFreezeResponse = alipayFreezeResponse;
    });
  }

  previousState() {
    window.history.back();
  }
}
