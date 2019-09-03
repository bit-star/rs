import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AlipayFreezeResponseRs } from 'app/shared/model/alipay-freeze-response-rs.model';
import { AlipayFreezeResponseRsService } from './alipay-freeze-response-rs.service';
import { AlipayFreezeResponseRsComponent } from './alipay-freeze-response-rs.component';
import { AlipayFreezeResponseRsDetailComponent } from './alipay-freeze-response-rs-detail.component';
import { AlipayFreezeResponseRsUpdateComponent } from './alipay-freeze-response-rs-update.component';
import { AlipayFreezeResponseRsDeletePopupComponent } from './alipay-freeze-response-rs-delete-dialog.component';
import { IAlipayFreezeResponseRs } from 'app/shared/model/alipay-freeze-response-rs.model';

@Injectable({ providedIn: 'root' })
export class AlipayFreezeResponseRsResolve implements Resolve<IAlipayFreezeResponseRs> {
  constructor(private service: AlipayFreezeResponseRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlipayFreezeResponseRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<AlipayFreezeResponseRs>) => response.ok),
        map((alipayFreezeResponse: HttpResponse<AlipayFreezeResponseRs>) => alipayFreezeResponse.body)
      );
    }
    return of(new AlipayFreezeResponseRs());
  }
}

export const alipayFreezeResponseRoute: Routes = [
  {
    path: '',
    component: AlipayFreezeResponseRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.alipayFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: AlipayFreezeResponseRsDetailComponent,
    resolve: {
      alipayFreezeResponse: AlipayFreezeResponseRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: AlipayFreezeResponseRsUpdateComponent,
    resolve: {
      alipayFreezeResponse: AlipayFreezeResponseRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: AlipayFreezeResponseRsUpdateComponent,
    resolve: {
      alipayFreezeResponse: AlipayFreezeResponseRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const alipayFreezeResponsePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: AlipayFreezeResponseRsDeletePopupComponent,
    resolve: {
      alipayFreezeResponse: AlipayFreezeResponseRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.alipayFreezeResponse.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
