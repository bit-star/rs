import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IPhotoRs, PhotoRs } from 'app/shared/model/photo-rs.model';
import { PhotoRsService } from './photo-rs.service';
import { ICommodityRs } from 'app/shared/model/commodity-rs.model';
import { CommodityRsService } from 'app/entities/commodity-rs';

@Component({
  selector: 'jhi-photo-rs-update',
  templateUrl: './photo-rs-update.component.html'
})
export class PhotoRsUpdateComponent implements OnInit {
  isSaving: boolean;

  commodities: ICommodityRs[];

  editForm = this.fb.group({
    id: [],
    originalImage: [],
    thumbnail: [],
    width: [],
    height: [],
    commodity: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected photoService: PhotoRsService,
    protected commodityService: CommodityRsService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ photo }) => {
      this.updateForm(photo);
    });
    this.commodityService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICommodityRs[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICommodityRs[]>) => response.body)
      )
      .subscribe((res: ICommodityRs[]) => (this.commodities = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(photo: IPhotoRs) {
    this.editForm.patchValue({
      id: photo.id,
      originalImage: photo.originalImage,
      thumbnail: photo.thumbnail,
      width: photo.width,
      height: photo.height,
      commodity: photo.commodity
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const photo = this.createFromForm();
    if (photo.id !== undefined) {
      this.subscribeToSaveResponse(this.photoService.update(photo));
    } else {
      this.subscribeToSaveResponse(this.photoService.create(photo));
    }
  }

  private createFromForm(): IPhotoRs {
    return {
      ...new PhotoRs(),
      id: this.editForm.get(['id']).value,
      originalImage: this.editForm.get(['originalImage']).value,
      thumbnail: this.editForm.get(['thumbnail']).value,
      width: this.editForm.get(['width']).value,
      height: this.editForm.get(['height']).value,
      commodity: this.editForm.get(['commodity']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPhotoRs>>) {
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
