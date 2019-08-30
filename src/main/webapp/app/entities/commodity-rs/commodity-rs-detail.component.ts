import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICommodityRs } from 'app/shared/model/commodity-rs.model';

@Component({
  selector: 'jhi-commodity-rs-detail',
  templateUrl: './commodity-rs-detail.component.html'
})
export class CommodityRsDetailComponent implements OnInit {
  commodity: ICommodityRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ commodity }) => {
      this.commodity = commodity;
    });
  }

  previousState() {
    window.history.back();
  }
}
