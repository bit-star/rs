import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IShippingAddressRs, ShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';
import { ShippingAddressRsService } from './shipping-address-rs.service';
import { IUser, UserService } from 'app/core';

@Component({
  selector: 'jhi-shipping-address-rs-update',
  templateUrl: './shipping-address-rs-update.component.html'
})
export class ShippingAddressRsUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  editForm = this.fb.group({
    id: [],
    receiver: [],
    moblie: [],
    province: [],
    city: [],
    region: [],
    address: [],
    user: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected shippingAddressService: ShippingAddressRsService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ shippingAddress }) => {
      this.updateForm(shippingAddress);
    });
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
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
      user: shippingAddress.user
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
      user: this.editForm.get(['user']).value
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

  trackUserById(index: number, item: IUser) {
    return item.id;
  }
}
