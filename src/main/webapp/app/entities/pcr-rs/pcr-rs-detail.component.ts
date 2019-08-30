import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPcrRs } from 'app/shared/model/pcr-rs.model';

@Component({
  selector: 'jhi-pcr-rs-detail',
  templateUrl: './pcr-rs-detail.component.html'
})
export class PcrRsDetailComponent implements OnInit {
  pcr: IPcrRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ pcr }) => {
      this.pcr = pcr;
    });
  }

  previousState() {
    window.history.back();
  }
}
