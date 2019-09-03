import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AlipayFreezeRequestRs } from 'app/shared/model/alipay-freeze-request-rs.model';
import { AlipayFreezeRequestRsService } from './alipay-freeze-request-rs.service';
import { AlipayFreezeRequestRsComponent } from './alipay-freeze-request-rs.component';
import { AlipayFreezeRequestRsDetailComponent } from './alipay-freeze-request-rs-detail.component';
import { AlipayFreezeRequestRsUpdateComponent } from './alipay-freeze-request-rs-update.component';
import { AlipayFreezeRequestRsDeletePopupComponent } from './alipay-freeze-request-rs-delete-dialog.component';
import { IAlipayFreezeRequestRs } from 'app/shared/model/alipay-freeze-request-rs.model';

@Injectable({ providedIn: 'root' })
export class AlipayFreezeRequestRsResolve implements Resolve<IAlipayFreezeRequestRs> {
  constructor(private service: AlipayFreezeRequestRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlipayFreezeRequestRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<AlipayFreezeRequestRs>) => response.ok),
        map((alipayFreezeRequest: HttpResponse<AlipayFreezeRequestRs>) => alipayFreezeRequest.body)
      );
    }
    return of(new AlipayFreezeRequestRs());
  }
}

export const alipayFreezeRequestRoute: Routes = [
  {
    path: '',
    component: AlipayFreezeRequestRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.alipayFreezeRequest.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: AlipayFreezeRequestRsDetailComponent,
    resolve: {
      alipayFreezeRequest: AlipayFreezeRequestRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFreezeRequest.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: AlipayFreezeRequestRsUpdateComponent,
    resolve: {
      alipayFreezeRequest: AlipayFreezeRequestRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFreezeRequest.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: AlipayFreezeRequestRsUpdateComponent,
    resolve: {
      alipayFreezeRequest: AlipayFreezeRequestRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFreezeRequest.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const alipayFreezeRequestPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: AlipayFreezeRequestRsDeletePopupComponent,
    resolve: {
      alipayFreezeRequest: AlipayFreezeRequestRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFreezeRequest.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
