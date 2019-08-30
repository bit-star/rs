import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IOrderRs, OrderRs } from 'app/shared/model/order-rs.model';
import { OrderRsService } from './order-rs.service';
import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';
import { AlipayUserRsService } from 'app/entities/alipay-user-rs';

@Component({
  selector: 'jhi-order-rs-update',
  templateUrl: './order-rs-update.component.html'
})
export class OrderRsUpdateComponent implements OnInit {
  isSaving: boolean;

  alipayusers: IAlipayUserRs[];

  editForm = this.fb.group({
    id: [],
    orderNo: [],
    status: [],
    receiver: [],
    mobile: [],
    province: [],
    city: [],
    region: [],
    address: [],
    storeName: [],
    logisticsCompany: [],
    shipmentNumber: [],
    paymentMethod: [],
    freight: [],
    description: [],
    processingOpinions: [],
    alipayUser: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected orderService: OrderRsService,
    protected alipayUserService: AlipayUserRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ order }) => {
      this.updateForm(order);
    });
    this.alipayUserService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IAlipayUserRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<IAlipayUserRs[]>) => response.body)
      )
      .subscribe((res: IAlipayUserRs[]) => (this.alipayusers = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(order: IOrderRs) {
    this.editForm.patchValue({
      id: order.id,
      orderNo: order.orderNo,
      status: order.status,
      receiver: order.receiver,
      mobile: order.mobile,
      province: order.province,
      city: order.city,
      region: order.region,
      address: order.address,
      storeName: order.storeName,
      logisticsCompany: order.logisticsCompany,
      shipmentNumber: order.shipmentNumber,
      paymentMethod: order.paymentMethod,
      freight: order.freight,
      description: order.description,
      processingOpinions: order.processingOpinions,
      alipayUser: order.alipayUser
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const order = this.createFromForm();
    if (order.id !== undefined) {
      this.subscribeToSaveResponse(this.orderService.update(order));
    } else {
      this.subscribeToSaveResponse(this.orderService.create(order));
    }
  }

  private createFromForm(): IOrderRs {
    return {
      ...new OrderRs(),
      id: this.editForm.get(['id']).value,
      orderNo: this.editForm.get(['orderNo']).value,
      status: this.editForm.get(['status']).value,
      receiver: this.editForm.get(['receiver']).value,
      mobile: this.editForm.get(['mobile']).value,
      province: this.editForm.get(['province']).value,
      city: this.editForm.get(['city']).value,
      region: this.editForm.get(['region']).value,
      address: this.editForm.get(['address']).value,
      storeName: this.editForm.get(['storeName']).value,
      logisticsCompany: this.editForm.get(['logisticsCompany']).value,
      shipmentNumber: this.editForm.get(['shipmentNumber']).value,
      paymentMethod: this.editForm.get(['paymentMethod']).value,
      freight: this.editForm.get(['freight']).value,
      description: this.editForm.get(['description']).value,
      processingOpinions: this.editForm.get(['processingOpinions']).value,
      alipayUser: this.editForm.get(['alipayUser']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrderRs>>) {
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
