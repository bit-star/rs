import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';
import { ShippingAddressRsService } from './shipping-address-rs.service';
import { ShippingAddressRsComponent } from './shipping-address-rs.component';
import { ShippingAddressRsDetailComponent } from './shipping-address-rs-detail.component';
import { ShippingAddressRsUpdateComponent } from './shipping-address-rs-update.component';
import { ShippingAddressRsDeletePopupComponent } from './shipping-address-rs-delete-dialog.component';
import { IShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';

@Injectable({ providedIn: 'root' })
export class ShippingAddressRsResolve implements Resolve<IShippingAddressRs> {
  constructor(private service: ShippingAddressRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IShippingAddressRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<ShippingAddressRs>) => response.ok),
        map((shippingAddress: HttpResponse<ShippingAddressRs>) => shippingAddress.body)
      );
    }
    return of(new ShippingAddressRs());
  }
}

export const shippingAddressRoute: Routes = [
  {
    path: '',
    component: ShippingAddressRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.shippingAddress.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: ShippingAddressRsDetailComponent,
    resolve: {
      shippingAddress: ShippingAddressRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.shippingAddress.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: ShippingAddressRsUpdateComponent,
    resolve: {
      shippingAddress: ShippingAddressRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.shippingAddress.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: ShippingAddressRsUpdateComponent,
    resolve: {
      shippingAddress: ShippingAddressRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.shippingAddress.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const shippingAddressPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: ShippingAddressRsDeletePopupComponent,
    resolve: {
      shippingAddress: ShippingAddressRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.shippingAddress.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
