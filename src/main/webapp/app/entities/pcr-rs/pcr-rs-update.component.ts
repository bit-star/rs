import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPcrRs, PcrRs } from 'app/shared/model/pcr-rs.model';
import { PcrRsService } from './pcr-rs.service';

@Component({
  selector: 'jhi-pcr-rs-update',
  templateUrl: './pcr-rs-update.component.html'
})
export class PcrRsUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    name: [],
    parentId: [],
    alias: [],
    level: [],
    phoneAreaCode: [],
    zip: [],
    pinyin: []
  });

  constructor(protected pcrService: PcrRsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ pcr }) => {
      this.updateForm(pcr);
    });
  }

  updateForm(pcr: IPcrRs) {
    this.editForm.patchValue({
      id: pcr.id,
      name: pcr.name,
      parentId: pcr.parentId,
      alias: pcr.alias,
      level: pcr.level,
      phoneAreaCode: pcr.phoneAreaCode,
      zip: pcr.zip,
      pinyin: pcr.pinyin
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const pcr = this.createFromForm();
    if (pcr.id !== undefined) {
      this.subscribeToSaveResponse(this.pcrService.update(pcr));
    } else {
      this.subscribeToSaveResponse(this.pcrService.create(pcr));
    }
  }

  private createFromForm(): IPcrRs {
    return {
      ...new PcrRs(),
      id: this.editForm.get(['id']).value,
      name: this.editForm.get(['name']).value,
      parentId: this.editForm.get(['parentId']).value,
      alias: this.editForm.get(['alias']).value,
      level: this.editForm.get(['level']).value,
      phoneAreaCode: this.editForm.get(['phoneAreaCode']).value,
      zip: this.editForm.get(['zip']).value,
      pinyin: this.editForm.get(['pinyin']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPcrRs>>) {
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
