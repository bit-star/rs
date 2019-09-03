import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IAlipayFreezeRequestRs, AlipayFreezeRequestRs } from 'app/shared/model/alipay-freeze-request-rs.model';
import { AlipayFreezeRequestRsService } from './alipay-freeze-request-rs.service';
import { IOrderRs } from 'app/shared/model/order-rs.model';
import { OrderRsService } from 'app/entities/order-rs';

@Component({
  selector: 'jhi-alipay-freeze-request-rs-update',
  templateUrl: './alipay-freeze-request-rs-update.component.html'
})
export class AlipayFreezeRequestRsUpdateComponent implements OnInit {
  isSaving: boolean;

  orders: IOrderRs[];

  editForm = this.fb.group({
    id: [],
    orderTitle: [],
    outOrderNo: [],
    outRequestNo: [],
    payeeUserId: [],
    payeeLogonId: [],
    productCode: [],
    amount: [],
    extraParam: [],
    notifyUrl: [],
    order: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected alipayFreezeRequestService: AlipayFreezeRequestRsService,
    protected orderService: OrderRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ alipayFreezeRequest }) => {
      this.updateForm(alipayFreezeRequest);
    });
    this.orderService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IOrderRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<IOrderRs[]>) => response.body)
      )
      .subscribe((res: IOrderRs[]) => (this.orders = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(alipayFreezeRequest: IAlipayFreezeRequestRs) {
    this.editForm.patchValue({
      id: alipayFreezeRequest.id,
      orderTitle: alipayFreezeRequest.orderTitle,
      outOrderNo: alipayFreezeRequest.outOrderNo,
      outRequestNo: alipayFreezeRequest.outRequestNo,
      payeeUserId: alipayFreezeRequest.payeeUserId,
      payeeLogonId: alipayFreezeRequest.payeeLogonId,
      productCode: alipayFreezeRequest.productCode,
      amount: alipayFreezeRequest.amount,
      extraParam: alipayFreezeRequest.extraParam,
      notifyUrl: alipayFreezeRequest.notifyUrl,
      order: alipayFreezeRequest.order
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const alipayFreezeRequest = this.createFromForm();
    if (alipayFreezeRequest.id !== undefined) {
      this.subscribeToSaveResponse(this.alipayFreezeRequestService.update(alipayFreezeRequest));
    } else {
      this.subscribeToSaveResponse(this.alipayFreezeRequestService.create(alipayFreezeRequest));
    }
  }

  private createFromForm(): IAlipayFreezeRequestRs {
    return {
      ...new AlipayFreezeRequestRs(),
      id: this.editForm.get(['id']).value,
      orderTitle: this.editForm.get(['orderTitle']).value,
      outOrderNo: this.editForm.get(['outOrderNo']).value,
      outRequestNo: this.editForm.get(['outRequestNo']).value,
      payeeUserId: this.editForm.get(['payeeUserId']).value,
      payeeLogonId: this.editForm.get(['payeeLogonId']).value,
      productCode: this.editForm.get(['productCode']).value,
      amount: this.editForm.get(['amount']).value,
      extraParam: this.editForm.get(['extraParam']).value,
      notifyUrl: this.editForm.get(['notifyUrl']).value,
      order: this.editForm.get(['order']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAlipayFreezeRequestRs>>) {
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

  trackOrderById(index: number, item: IOrderRs) {
    return item.id;
  }
}
