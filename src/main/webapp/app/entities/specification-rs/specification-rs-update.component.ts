import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ISpecificationRs, SpecificationRs } from 'app/shared/model/specification-rs.model';
import { SpecificationRsService } from './specification-rs.service';
import { ICommodityRs } from 'app/shared/model/commodity-rs.model';
import { CommodityRsService } from 'app/entities/commodity-rs';

@Component({
  selector: 'jhi-specification-rs-update',
  templateUrl: './specification-rs-update.component.html'
})
export class SpecificationRsUpdateComponent implements OnInit {
  isSaving: boolean;

  commodities: ICommodityRs[];

  editForm = this.fb.group({
    id: [],
    name: [],
    value: [],
    commodity: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected specificationService: SpecificationRsService,
    protected commodityService: CommodityRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ specification }) => {
      this.updateForm(specification);
    });
    this.commodityService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICommodityRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICommodityRs[]>) => response.body)
      )
      .subscribe((res: ICommodityRs[]) => (this.commodities = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(specification: ISpecificationRs) {
    this.editForm.patchValue({
      id: specification.id,
      name: specification.name,
      value: specification.value,
      commodity: specification.commodity
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const specification = this.createFromForm();
    if (specification.id !== undefined) {
      this.subscribeToSaveResponse(this.specificationService.update(specification));
    } else {
      this.subscribeToSaveResponse(this.specificationService.create(specification));
    }
  }

  private createFromForm(): ISpecificationRs {
    return {
      ...new SpecificationRs(),
      id: this.editForm.get(['id']).value,
      name: this.editForm.get(['name']).value,
      value: this.editForm.get(['value']).value,
      commodity: this.editForm.get(['commodity']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISpecificationRs>>) {
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
}
