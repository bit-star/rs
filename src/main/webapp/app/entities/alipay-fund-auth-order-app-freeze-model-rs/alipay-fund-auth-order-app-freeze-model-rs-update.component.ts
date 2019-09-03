import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IAlipayFundAuthOrderAppFreezeModelRs,
  AlipayFundAuthOrderAppFreezeModelRs
} from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';
import { AlipayFundAuthOrderAppFreezeModelRsService } from './alipay-fund-auth-order-app-freeze-model-rs.service';

@Component({
  selector: 'jhi-alipay-fund-auth-order-app-freeze-model-rs-update',
  templateUrl: './alipay-fund-auth-order-app-freeze-model-rs-update.component.html'
})
export class AlipayFundAuthOrderAppFreezeModelRsUpdateComponent implements OnInit {
  isSaving: boolean;

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
    notifyUrl: []
  });

  constructor(
    protected alipayFundAuthOrderAppFreezeModelService: AlipayFundAuthOrderAppFreezeModelRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ alipayFundAuthOrderAppFreezeModel }) => {
      this.updateForm(alipayFundAuthOrderAppFreezeModel);
    });
  }

  updateForm(alipayFundAuthOrderAppFreezeModel: IAlipayFundAuthOrderAppFreezeModelRs) {
    this.editForm.patchValue({
      id: alipayFundAuthOrderAppFreezeModel.id,
      orderTitle: alipayFundAuthOrderAppFreezeModel.orderTitle,
      outOrderNo: alipayFundAuthOrderAppFreezeModel.outOrderNo,
      outRequestNo: alipayFundAuthOrderAppFreezeModel.outRequestNo,
      payeeUserId: alipayFundAuthOrderAppFreezeModel.payeeUserId,
      payeeLogonId: alipayFundAuthOrderAppFreezeModel.payeeLogonId,
      productCode: alipayFundAuthOrderAppFreezeModel.productCode,
      amount: alipayFundAuthOrderAppFreezeModel.amount,
      extraParam: alipayFundAuthOrderAppFreezeModel.extraParam,
      notifyUrl: alipayFundAuthOrderAppFreezeModel.notifyUrl
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const alipayFundAuthOrderAppFreezeModel = this.createFromForm();
    if (alipayFundAuthOrderAppFreezeModel.id !== undefined) {
      this.subscribeToSaveResponse(this.alipayFundAuthOrderAppFreezeModelService.update(alipayFundAuthOrderAppFreezeModel));
    } else {
      this.subscribeToSaveResponse(this.alipayFundAuthOrderAppFreezeModelService.create(alipayFundAuthOrderAppFreezeModel));
    }
  }

  private createFromForm(): IAlipayFundAuthOrderAppFreezeModelRs {
    return {
      ...new AlipayFundAuthOrderAppFreezeModelRs(),
      id: this.editForm.get(['id']).value,
      orderTitle: this.editForm.get(['orderTitle']).value,
      outOrderNo: this.editForm.get(['outOrderNo']).value,
      outRequestNo: this.editForm.get(['outRequestNo']).value,
      payeeUserId: this.editForm.get(['payeeUserId']).value,
      payeeLogonId: this.editForm.get(['payeeLogonId']).value,
      productCode: this.editForm.get(['productCode']).value,
      amount: this.editForm.get(['amount']).value,
      extraParam: this.editForm.get(['extraParam']).value,
      notifyUrl: this.editForm.get(['notifyUrl']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAlipayFundAuthOrderAppFreezeModelRs>>) {
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
