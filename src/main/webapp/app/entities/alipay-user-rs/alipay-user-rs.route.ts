import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AlipayUserRs } from 'app/shared/model/alipay-user-rs.model';
import { AlipayUserRsService } from './alipay-user-rs.service';
import { AlipayUserRsComponent } from './alipay-user-rs.component';
import { AlipayUserRsDetailComponent } from './alipay-user-rs-detail.component';
import { AlipayUserRsUpdateComponent } from './alipay-user-rs-update.component';
import { AlipayUserRsDeletePopupComponent } from './alipay-user-rs-delete-dialog.component';
import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';

@Injectable({ providedIn: 'root' })
export class AlipayUserRsResolve implements Resolve<IAlipayUserRs> {
  constructor(private service: AlipayUserRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlipayUserRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<AlipayUserRs>) => response.ok),
        map((alipayUser: HttpResponse<AlipayUserRs>) => alipayUser.body)
      );
    }
    return of(new AlipayUserRs());
  }
}

export const alipayUserRoute: Routes = [
  {
    path: '',
    component: AlipayUserRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.alipayUser.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: AlipayUserRsDetailComponent,
    resolve: {
      alipayUser: AlipayUserRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayUser.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: AlipayUserRsUpdateComponent,
    resolve: {
      alipayUser: AlipayUserRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayUser.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: AlipayUserRsUpdateComponent,
    resolve: {
      alipayUser: AlipayUserRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayUser.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const alipayUserPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: AlipayUserRsDeletePopupComponent,
    resolve: {
      alipayUser: AlipayUserRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayUser.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
