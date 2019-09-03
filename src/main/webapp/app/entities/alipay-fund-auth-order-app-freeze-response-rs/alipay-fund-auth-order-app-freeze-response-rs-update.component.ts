import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IAlipayFundAuthOrderAppFreezeResponseRs,
  AlipayFundAuthOrderAppFreezeResponseRs
} from 'app/shared/model/alipay-fund-auth-order-app-freeze-response-rs.model';
import { AlipayFundAuthOrderAppFreezeResponseRsService } from './alipay-fund-auth-order-app-freeze-response-rs.service';

@Component({
  selector: 'jhi-alipay-fund-auth-order-app-freeze-response-rs-update',
  templateUrl: './alipay-fund-auth-order-app-freeze-response-rs-update.component.html'
})
export class AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent implements OnInit {
  isSaving: boolean;

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
    status: []
  });

  constructor(
    protected alipayFundAuthOrderAppFreezeResponseService: AlipayFundAuthOrderAppFreezeResponseRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ alipayFundAuthOrderAppFreezeResponse }) => {
      this.updateForm(alipayFundAuthOrderAppFreezeResponse);
    });
  }

  updateForm(alipayFundAuthOrderAppFreezeResponse: IAlipayFundAuthOrderAppFreezeResponseRs) {
    this.editForm.patchValue({
      id: alipayFundAuthOrderAppFreezeResponse.id,
      amount: alipayFundAuthOrderAppFreezeResponse.amount,
      authNo: alipayFundAuthOrderAppFreezeResponse.authNo,
      creditAmount: alipayFundAuthOrderAppFreezeResponse.creditAmount,
      fundAmount: alipayFundAuthOrderAppFreezeResponse.fundAmount,
      gmtTrans: alipayFundAuthOrderAppFreezeResponse.gmtTrans,
      operationId: alipayFundAuthOrderAppFreezeResponse.operationId,
      outOrderNo: alipayFundAuthOrderAppFreezeResponse.outOrderNo,
      outRequestNo: alipayFundAuthOrderAppFreezeResponse.outRequestNo,
      payerUserId: alipayFundAuthOrderAppFreezeResponse.payerUserId,
      preAuthType: alipayFundAuthOrderAppFreezeResponse.preAuthType,
      status: alipayFundAuthOrderAppFreezeResponse.status
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const alipayFundAuthOrderAppFreezeResponse = this.createFromForm();
    if (alipayFundAuthOrderAppFreezeResponse.id !== undefined) {
      this.subscribeToSaveResponse(this.alipayFundAuthOrderAppFreezeResponseService.update(alipayFundAuthOrderAppFreezeResponse));
    } else {
      this.subscribeToSaveResponse(this.alipayFundAuthOrderAppFreezeResponseService.create(alipayFundAuthOrderAppFreezeResponse));
    }
  }

  private createFromForm(): IAlipayFundAuthOrderAppFreezeResponseRs {
    return {
      ...new AlipayFundAuthOrderAppFreezeResponseRs(),
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
      status: this.editForm.get(['status']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAlipayFundAuthOrderAppFreezeResponseRs>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
