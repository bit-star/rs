import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CommodityRs } from 'app/shared/model/commodity-rs.model';
import { CommodityRsService } from './commodity-rs.service';
import { CommodityRsComponent } from './commodity-rs.component';
import { CommodityRsDetailComponent } from './commodity-rs-detail.component';
import { CommodityRsUpdateComponent } from './commodity-rs-update.component';
import { CommodityRsDeletePopupComponent } from './commodity-rs-delete-dialog.component';
import { ICommodityRs } from 'app/shared/model/commodity-rs.model';

@Injectable({ providedIn: 'root' })
export class CommodityRsResolve implements Resolve<ICommodityRs> {
  constructor(private service: CommodityRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICommodityRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<CommodityRs>) => response.ok),
        map((commodity: HttpResponse<CommodityRs>) => commodity.body)
      );
    }
    return of(new CommodityRs());
  }
}

export const commodityRoute: Routes = [
  {
    path: '',
    component: CommodityRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.commodity.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: CommodityRsDetailComponent,
    resolve: {
      commodity: CommodityRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.commodity.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: CommodityRsUpdateComponent,
    resolve: {
      commodity: CommodityRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.commodity.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: CommodityRsUpdateComponent,
    resolve: {
      commodity: CommodityRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.commodity.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const commodityPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: CommodityRsDeletePopupComponent,
    resolve: {
      commodity: CommodityRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.commodity.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
