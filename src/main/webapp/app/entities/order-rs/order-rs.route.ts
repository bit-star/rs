import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OrderRs } from 'app/shared/model/order-rs.model';
import { OrderRsService } from './order-rs.service';
import { OrderRsComponent } from './order-rs.component';
import { OrderRsDetailComponent } from './order-rs-detail.component';
import { OrderRsUpdateComponent } from './order-rs-update.component';
import { OrderRsDeletePopupComponent } from './order-rs-delete-dialog.component';
import { IOrderRs } from 'app/shared/model/order-rs.model';

@Injectable({ providedIn: 'root' })
export class OrderRsResolve implements Resolve<IOrderRs> {
  constructor(private service: OrderRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IOrderRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<OrderRs>) => response.ok),
        map((order: HttpResponse<OrderRs>) => order.body)
      );
    }
    return of(new OrderRs());
  }
}

export const orderRoute: Routes = [
  {
    path: '',
    component: OrderRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.order.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: OrderRsDetailComponent,
    resolve: {
      order: OrderRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.order.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: OrderRsUpdateComponent,
    resolve: {
      order: OrderRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.order.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: OrderRsUpdateComponent,
    resolve: {
      order: OrderRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.order.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const orderPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: OrderRsDeletePopupComponent,
    resolve: {
      order: OrderRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.order.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
