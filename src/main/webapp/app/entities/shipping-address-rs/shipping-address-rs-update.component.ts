import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IShippingAddressRs, ShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';
import { ShippingAddressRsService } from './shipping-address-rs.service';
import { IPcrRs } from 'app/shared/model/pcr-rs.model';
import { PcrRsService } from 'app/entities/pcr-rs';
import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';
import { AlipayUserRsService } from 'app/entities/alipay-user-rs';

@Component({
  selector: 'jhi-shipping-address-rs-update',
  templateUrl: './shipping-address-rs-update.component.html'
})
export class ShippingAddressRsUpdateComponent implements OnInit {
  isSaving: boolean;

  pcrs: IPcrRs[];

  alipayusers: IAlipayUserRs[];

  editForm = this.fb.group({
    id: [],
    receiver: [],
    moblie: [],
    address: [],
    pcr: [],
    alipayUser: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected shippingAddressService: ShippingAddressRsService,
    protected pcrService: PcrRsService,
    protected alipayUserService: AlipayUserRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ shippingAddress }) => {
      this.updateForm(shippingAddress);
    });
    this.pcrService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IPcrRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<IPcrRs[]>) => response.body)
      )
      .subscribe((res: IPcrRs[]) => (this.pcrs = res), (res: HttpErrorResponse) => this.onError(res.message));
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
      address: shippingAddress.address,
      pcr: shippingAddress.pcr,
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
      address: this.editForm.get(['address']).value,
      pcr: this.editForm.get(['pcr']).value,
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

  trackPcrById(index: number, item: IPcrRs) {
    return item.id;
  }

  trackAlipayUserById(index: number, item: IAlipayUserRs) {
    return item.id;
  }
}
