import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PhotoRs } from 'app/shared/model/photo-rs.model';
import { PhotoRsService } from './photo-rs.service';
import { PhotoRsComponent } from './photo-rs.component';
import { PhotoRsDetailComponent } from './photo-rs-detail.component';
import { PhotoRsUpdateComponent } from './photo-rs-update.component';
import { PhotoRsDeletePopupComponent } from './photo-rs-delete-dialog.component';
import { IPhotoRs } from 'app/shared/model/photo-rs.model';

@Injectable({ providedIn: 'root' })
export class PhotoRsResolve implements Resolve<IPhotoRs> {
  constructor(private service: PhotoRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhotoRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<PhotoRs>) => response.ok),
        map((photo: HttpResponse<PhotoRs>) => photo.body)
      );
    }
    return of(new PhotoRs());
  }
}

export const photoRoute: Routes = [
  {
    path: '',
    component: PhotoRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.photo.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: PhotoRsDetailComponent,
    resolve: {
      photo: PhotoRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.photo.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: PhotoRsUpdateComponent,
    resolve: {
      photo: PhotoRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.photo.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: PhotoRsUpdateComponent,
    resolve: {
      photo: PhotoRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.photo.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const photoPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: PhotoRsDeletePopupComponent,
    resolve: {
      photo: PhotoRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.photo.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
