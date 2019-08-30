import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IOrderItemRs, OrderItemRs } from 'app/shared/model/order-item-rs.model';
import { OrderItemRsService } from './order-item-rs.service';
import { ICommodityRs } from 'app/shared/model/commodity-rs.model';
import { CommodityRsService } from 'app/entities/commodity-rs';
import { IOrderRs } from 'app/shared/model/order-rs.model';
import { OrderRsService } from 'app/entities/order-rs';

@Component({
  selector: 'jhi-order-item-rs-update',
  templateUrl: './order-item-rs-update.component.html'
})
export class OrderItemRsUpdateComponent implements OnInit {
  isSaving: boolean;

  commodities: ICommodityRs[];

  orders: IOrderRs[];

  editForm = this.fb.group({
    id: [],
    unitPrice: [],
    actuallyPaid: [],
    rightsProtectionStatus: [],
    commodity: [],
    order: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected orderItemService: OrderItemRsService,
    protected commodityService: CommodityRsService,
    protected orderService: OrderRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ orderItem }) => {
      this.updateForm(orderItem);
    });
    this.commodityService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICommodityRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICommodityRs[]>) => response.body)
      )
      .subscribe((res: ICommodityRs[]) => (this.commodities = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.orderService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IOrderRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<IOrderRs[]>) => response.body)
      )
      .subscribe((res: IOrderRs[]) => (this.orders = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(orderItem: IOrderItemRs) {
    this.editForm.patchValue({
      id: orderItem.id,
      unitPrice: orderItem.unitPrice,
      actuallyPaid: orderItem.actuallyPaid,
      rightsProtectionStatus: orderItem.rightsProtectionStatus,
      commodity: orderItem.commodity,
      order: orderItem.order
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const orderItem = this.createFromForm();
    if (orderItem.id !== undefined) {
      this.subscribeToSaveResponse(this.orderItemService.update(orderItem));
    } else {
      this.subscribeToSaveResponse(this.orderItemService.create(orderItem));
    }
  }

  private createFromForm(): IOrderItemRs {
    return {
      ...new OrderItemRs(),
      id: this.editForm.get(['id']).value,
      unitPrice: this.editForm.get(['unitPrice']).value,
      actuallyPaid: this.editForm.get(['actuallyPaid']).value,
      rightsProtectionStatus: this.editForm.get(['rightsProtectionStatus']).value,
      commodity: this.editForm.get(['commodity']).value,
      order: this.editForm.get(['order']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrderItemRs>>) {
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

  trackCommodityById(index: number, item: ICommodityRs) {
    return item.id;
  }

  trackOrderById(index: number, item: IOrderRs) {
    return item.id;
  }
}
