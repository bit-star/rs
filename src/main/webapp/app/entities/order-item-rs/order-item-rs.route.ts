import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OrderItemRs } from 'app/shared/model/order-item-rs.model';
import { OrderItemRsService } from './order-item-rs.service';
import { OrderItemRsComponent } from './order-item-rs.component';
import { OrderItemRsDetailComponent } from './order-item-rs-detail.component';
import { OrderItemRsUpdateComponent } from './order-item-rs-update.component';
import { OrderItemRsDeletePopupComponent } from './order-item-rs-delete-dialog.component';
import { IOrderItemRs } from 'app/shared/model/order-item-rs.model';

@Injectable({ providedIn: 'root' })
export class OrderItemRsResolve implements Resolve<IOrderItemRs> {
  constructor(private service: OrderItemRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IOrderItemRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<OrderItemRs>) => response.ok),
        map((orderItem: HttpResponse<OrderItemRs>) => orderItem.body)
      );
    }
    return of(new OrderItemRs());
  }
}

export const orderItemRoute: Routes = [
  {
    path: '',
    component: OrderItemRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.orderItem.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: OrderItemRsDetailComponent,
    resolve: {
      orderItem: OrderItemRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.orderItem.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: OrderItemRsUpdateComponent,
    resolve: {
      orderItem: OrderItemRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.orderItem.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: OrderItemRsUpdateComponent,
    resolve: {
      orderItem: OrderItemRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.orderItem.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const orderItemPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: OrderItemRsDeletePopupComponent,
    resolve: {
      orderItem: OrderItemRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.orderItem.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
