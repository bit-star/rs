import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IItemLeaseCycleRs } from 'app/shared/model/item-lease-cycle-rs.model';

@Component({
  selector: 'jhi-item-lease-cycle-rs-detail',
  templateUrl: './item-lease-cycle-rs-detail.component.html'
})
export class ItemLeaseCycleRsDetailComponent implements OnInit {
  itemLeaseCycle: IItemLeaseCycleRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ itemLeaseCycle }) => {
      this.itemLeaseCycle = itemLeaseCycle;
    });
  }

  previousState() {
    window.history.back();
  }
}
