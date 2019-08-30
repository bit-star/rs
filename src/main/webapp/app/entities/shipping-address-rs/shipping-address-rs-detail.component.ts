import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';

@Component({
  selector: 'jhi-shipping-address-rs-detail',
  templateUrl: './shipping-address-rs-detail.component.html'
})
export class ShippingAddressRsDetailComponent implements OnInit {
  shippingAddress: IShippingAddressRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ shippingAddress }) => {
      this.shippingAddress = shippingAddress;
    });
  }

  previousState() {
    window.history.back();
  }
}
