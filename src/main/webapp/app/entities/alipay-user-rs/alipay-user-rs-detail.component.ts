import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';

@Component({
  selector: 'jhi-alipay-user-rs-detail',
  templateUrl: './alipay-user-rs-detail.component.html'
})
export class AlipayUserRsDetailComponent implements OnInit {
  alipayUser: IAlipayUserRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ alipayUser }) => {
      this.alipayUser = alipayUser;
    });
  }

  previousState() {
    window.history.back();
  }
}
