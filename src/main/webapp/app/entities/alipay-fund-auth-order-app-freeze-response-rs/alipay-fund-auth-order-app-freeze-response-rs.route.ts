import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AlipayFundAuthOrderAppFreezeResponseRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-response-rs.model';
import { AlipayFundAuthOrderAppFreezeResponseRsService } from './alipay-fund-auth-order-app-freeze-response-rs.service';
import { AlipayFundAuthOrderAppFreezeResponseRsComponent } from './alipay-fund-auth-order-app-freeze-response-rs.component';
import { AlipayFundAuthOrderAppFreezeResponseRsDetailComponent } from './alipay-fund-auth-order-app-freeze-response-rs-detail.component';
import { AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent } from './alipay-fund-auth-order-app-freeze-response-rs-update.component';
import { AlipayFundAuthOrderAppFreezeResponseRsDeletePopupComponent } from './alipay-fund-auth-order-app-freeze-response-rs-delete-dialog.component';
import { IAlipayFundAuthOrderAppFreezeResponseRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-response-rs.model';

@Injectable({ providedIn: 'root' })
export class AlipayFundAuthOrderAppFreezeResponseRsResolve implements Resolve<IAlipayFundAuthOrderAppFreezeResponseRs> {
  constructor(private service: AlipayFundAuthOrderAppFreezeResponseRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlipayFundAuthOrderAppFreezeResponseRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<AlipayFundAuthOrderAppFreezeResponseRs>) => response.ok),
        map(
          (alipayFundAuthOrderAppFreezeResponse: HttpResponse<AlipayFundAuthOrderAppFreezeResponseRs>) =>
            alipayFundAuthOrderAppFreezeResponse.body
        )
      );
    }
    return of(new AlipayFundAuthOrderAppFreezeResponseRs());
  }
}

export const alipayFundAuthOrderAppFreezeResponseRoute: Routes = [
  {
    path: '',
    component: AlipayFundAuthOrderAppFreezeResponseRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: AlipayFundAuthOrderAppFreezeResponseRsDetailComponent,
    resolve: {
      alipayFundAuthOrderAppFreezeResponse: AlipayFundAuthOrderAppFreezeResponseRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent,
    resolve: {
      alipayFundAuthOrderAppFreezeResponse: AlipayFundAuthOrderAppFreezeResponseRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent,
    resolve: {
      alipayFundAuthOrderAppFreezeResponse: AlipayFundAuthOrderAppFreezeResponseRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const alipayFundAuthOrderAppFreezeResponsePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: AlipayFundAuthOrderAppFreezeResponseRsDeletePopupComponent,
    resolve: {
      alipayFundAuthOrderAppFreezeResponse: AlipayFundAuthOrderAppFreezeResponseRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFundAuthOrderAppFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
