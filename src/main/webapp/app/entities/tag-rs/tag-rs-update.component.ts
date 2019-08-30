import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ITagRs, TagRs } from 'app/shared/model/tag-rs.model';
import { TagRsService } from './tag-rs.service';
import { ICommodityRs } from 'app/shared/model/commodity-rs.model';
import { CommodityRsService } from 'app/entities/commodity-rs';

@Component({
  selector: 'jhi-tag-rs-update',
  templateUrl: './tag-rs-update.component.html'
})
export class TagRsUpdateComponent implements OnInit {
  isSaving: boolean;

  commodities: ICommodityRs[];

  editForm = this.fb.group({
    id: [],
    name: [],
    icon: [],
    remark: [],
    commodity: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected tagService: TagRsService,
    protected commodityService: CommodityRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ tag }) => {
      this.updateForm(tag);
    });
    this.commodityService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICommodityRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICommodityRs[]>) => response.body)
      )
      .subscribe((res: ICommodityRs[]) => (this.commodities = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(tag: ITagRs) {
    this.editForm.patchValue({
      id: tag.id,
      name: tag.name,
      icon: tag.icon,
      remark: tag.remark,
      commodity: tag.commodity
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const tag = this.createFromForm();
    if (tag.id !== undefined) {
      this.subscribeToSaveResponse(this.tagService.update(tag));
    } else {
      this.subscribeToSaveResponse(this.tagService.create(tag));
    }
  }

  private createFromForm(): ITagRs {
    return {
      ...new TagRs(),
      id: this.editForm.get(['id']).value,
      name: this.editForm.get(['name']).value,
      icon: this.editForm.get(['icon']).value,
      remark: this.editForm.get(['remark']).value,
      commodity: this.editForm.get(['commodity']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITagRs>>) {
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
