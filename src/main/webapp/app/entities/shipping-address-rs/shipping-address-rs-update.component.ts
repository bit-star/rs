import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IShippingAddressRs, ShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';
import { ShippingAddressRsService } from './shipping-address-rs.service';
import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';
import { AlipayUserRsService } from 'app/entities/alipay-user-rs';

@Component({
  selector: 'jhi-shipping-address-rs-update',
  templateUrl: './shipping-address-rs-update.component.html'
})
export class ShippingAddressRsUpdateComponent implements OnInit {
  isSaving: boolean;

  alipayusers: IAlipayUserRs[];

  editForm = this.fb.group({
    id: [],
    receiver: [],
    moblie: [],
    province: [],
    city: [],
    region: [],
    address: [],
    alipayUser: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected shippingAddressService: ShippingAddressRsService,
    protected alipayUserService: AlipayUserRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ shippingAddress }) => {
      this.updateForm(shippingAddress);
    });
    this.alipayUserService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IAlipayUserRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<IAlipayUserRs[]>) => response.body)
      )
      .subscribe((res: IAlipayUserRs[]) => (this.alipayusers = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(shippingAddress: IShippingAddressRs) {
    this.editForm.patchValue({
      id: shippingAddress.id,
      receiver: shippingAddress.receiver,
      moblie: shippingAddress.moblie,
      province: shippingAddress.province,
      city: shippingAddress.city,
      region: shippingAddress.region,
      address: shippingAddress.address,
      alipayUser: shippingAddress.alipayUser
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const shippingAddress = this.createFromForm();
    if (shippingAddress.id !== undefined) {
      this.subscribeToSaveResponse(this.shippingAddressService.update(shippingAddress));
    } else {
      this.subscribeToSaveResponse(this.shippingAddressService.create(shippingAddress));
    }
  }

  private createFromForm(): IShippingAddressRs {
    return {
      ...new ShippingAddressRs(),
      id: this.editForm.get(['id']).value,
      receiver: this.editForm.get(['receiver']).value,
      moblie: this.editForm.get(['moblie']).value,
      province: this.editForm.get(['province']).value,
      city: this.editForm.get(['city']).value,
      region: this.editForm.get(['region']).value,
      address: this.editForm.get(['address']).value,
      alipayUser: this.editForm.get(['alipayUser']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IShippingAddressRs>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackAlipayUserById(index: number, item: IAlipayUserRs) {
    return item.id;
  }
}
