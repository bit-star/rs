import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IAlipayFreezeResponseRs, AlipayFreezeResponseRs } from 'app/shared/model/alipay-freeze-response-rs.model';
import { AlipayFreezeResponseRsService } from './alipay-freeze-response-rs.service';
import { IOrderRs } from 'app/shared/model/order-rs.model';
import { OrderRsService } from 'app/entities/order-rs';

@Component({
  selector: 'jhi-alipay-freeze-response-rs-update',
  templateUrl: './alipay-freeze-response-rs-update.component.html'
})
export class AlipayFreezeResponseRsUpdateComponent implements OnInit {
  isSaving: boolean;

  orders: IOrderRs[];

  editForm = this.fb.group({
    id: [],
    amount: [],
    authNo: [],
    creditAmount: [],
    fundAmount: [],
    gmtTrans: [],
    operationId: [],
    outOrderNo: [],
    outRequestNo: [],
    payerUserId: [],
    preAuthType: [],
    status: [],
    order: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected alipayFreezeResponseService: AlipayFreezeResponseRsService,
    protected orderService: OrderRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ alipayFreezeResponse }) => {
      this.updateForm(alipayFreezeResponse);
    });
    this.orderService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IOrderRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<IOrderRs[]>) => response.body)
      )
      .subscribe((res: IOrderRs[]) => (this.orders = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(alipayFreezeResponse: IAlipayFreezeResponseRs) {
    this.editForm.patchValue({
      id: alipayFreezeResponse.id,
      amount: alipayFreezeResponse.amount,
      authNo: alipayFreezeResponse.authNo,
      creditAmount: alipayFreezeResponse.creditAmount,
      fundAmount: alipayFreezeResponse.fundAmount,
      gmtTrans: alipayFreezeResponse.gmtTrans,
      operationId: alipayFreezeResponse.operationId,
      outOrderNo: alipayFreezeResponse.outOrderNo,
      outRequestNo: alipayFreezeResponse.outRequestNo,
      payerUserId: alipayFreezeResponse.payerUserId,
      preAuthType: alipayFreezeResponse.preAuthType,
      status: alipayFreezeResponse.status,
      order: alipayFreezeResponse.order
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const alipayFreezeResponse = this.createFromForm();
    if (alipayFreezeResponse.id !== undefined) {
      this.subscribeToSaveResponse(this.alipayFreezeResponseService.update(alipayFreezeResponse));
    } else {
      this.subscribeToSaveResponse(this.alipayFreezeResponseService.create(alipayFreezeResponse));
    }
  }

  private createFromForm(): IAlipayFreezeResponseRs {
    return {
      ...new AlipayFreezeResponseRs(),
      id: this.editForm.get(['id']).value,
      amount: this.editForm.get(['amount']).value,
      authNo: this.editForm.get(['authNo']).value,
      creditAmount: this.editForm.get(['creditAmount']).value,
      fundAmount: this.editForm.get(['fundAmount']).value,
      gmtTrans: this.editForm.get(['gmtTrans']).value,
      operationId: this.editForm.get(['operationId']).value,
      outOrderNo: this.editForm.get(['outOrderNo']).value,
      outRequestNo: this.editForm.get(['outRequestNo']).value,
      payerUserId: this.editForm.get(['payerUserId']).value,
      preAuthType: this.editForm.get(['preAuthType']).value,
      status: this.editForm.get(['status']).value,
      order: this.editForm.get(['order']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAlipayFreezeResponseRs>>) {
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
