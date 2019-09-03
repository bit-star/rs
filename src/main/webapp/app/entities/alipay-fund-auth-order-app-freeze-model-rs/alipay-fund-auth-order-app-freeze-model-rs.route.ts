import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AlipayFundAuthOrderAppFreezeModelRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';
import { AlipayFundAuthOrderAppFreezeModelRsService } from './alipay-fund-auth-order-app-freeze-model-rs.service';
import { AlipayFundAuthOrderAppFreezeModelRsComponent } from './alipay-fund-auth-order-app-freeze-model-rs.component';
import { AlipayFundAuthOrderAppFreezeModelRsDetailComponent } from './alipay-fund-auth-order-app-freeze-model-rs-detail.component';
import { AlipayFundAuthOrderAppFreezeModelRsUpdateComponent } from './alipay-fund-auth-order-app-freeze-model-rs-update.component';
import { AlipayFundAuthOrderAppFreezeModelRsDeletePopupComponent } from './alipay-fund-auth-order-app-freeze-model-rs-delete-dialog.component';
import { IAlipayFundAuthOrderAppFreezeModelRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';

@Injectable({ providedIn: 'root' })
export class AlipayFundAuthOrderAppFreezeModelRsResolve implements Resolve<IAlipayFundAuthOrderAppFreezeModelRs> {
  constructor(private service: AlipayFundAuthOrderAppFreezeModelRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlipayFundAuthOrderAppFreezeModelRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<AlipayFundAuthOrderAppFreezeModelRs>) => response.ok),
        map(
          (alipayFundAuthOrderAppFreezeModel: HttpResponse<AlipayFundAuthOrderAppFreezeModelRs>) => alipayFundAuthOrderAppFreezeModel.body
        )
      );
    }
    return of(new AlipayFundAuthOrderAppFreezeModelRs());
  }
}

export const alipayFundAuthOrderAppFreezeModelRoute: Routes = [
  {
    path: '',
    component: AlipayFundAuthOrderAppFreezeModelRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeModel.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: AlipayFundAuthOrderAppFreezeModelRsDetailComponent,
    resolve: {
      alipayFundAuthOrderAppFreezeModel: AlipayFundAuthOrderAppFreezeModelRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeModel.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: AlipayFundAuthOrderAppFreezeModelRsUpdateComponent,
    resolve: {
      alipayFundAuthOrderAppFreezeModel: AlipayFundAuthOrderAppFreezeModelRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeModel.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: AlipayFundAuthOrderAppFreezeModelRsUpdateComponent,
    resolve: {
      alipayFundAuthOrderAppFreezeModel: AlipayFundAuthOrderAppFreezeModelRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeModel.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const alipayFundAuthOrderAppFreezeModelPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: AlipayFundAuthOrderAppFreezeModelRsDeletePopupComponent,
    resolve: {
      alipayFundAuthOrderAppFreezeModel: AlipayFundAuthOrderAppFreezeModelRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeModel.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
