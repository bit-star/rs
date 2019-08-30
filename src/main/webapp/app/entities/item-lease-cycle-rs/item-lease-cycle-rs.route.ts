import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ItemLeaseCycleRs } from 'app/shared/model/item-lease-cycle-rs.model';
import { ItemLeaseCycleRsService } from './item-lease-cycle-rs.service';
import { ItemLeaseCycleRsComponent } from './item-lease-cycle-rs.component';
import { ItemLeaseCycleRsDetailComponent } from './item-lease-cycle-rs-detail.component';
import { ItemLeaseCycleRsUpdateComponent } from './item-lease-cycle-rs-update.component';
import { ItemLeaseCycleRsDeletePopupComponent } from './item-lease-cycle-rs-delete-dialog.component';
import { IItemLeaseCycleRs } from 'app/shared/model/item-lease-cycle-rs.model';

@Injectable({ providedIn: 'root' })
export class ItemLeaseCycleRsResolve implements Resolve<IItemLeaseCycleRs> {
  constructor(private service: ItemLeaseCycleRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IItemLeaseCycleRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<ItemLeaseCycleRs>) => response.ok),
        map((itemLeaseCycle: HttpResponse<ItemLeaseCycleRs>) => itemLeaseCycle.body)
      );
    }
    return of(new ItemLeaseCycleRs());
  }
}

export const itemLeaseCycleRoute: Routes = [
  {
    path: '',
    component: ItemLeaseCycleRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.itemLeaseCycle.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: ItemLeaseCycleRsDetailComponent,
    resolve: {
      itemLeaseCycle: ItemLeaseCycleRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.itemLeaseCycle.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: ItemLeaseCycleRsUpdateComponent,
    resolve: {
      itemLeaseCycle: ItemLeaseCycleRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.itemLeaseCycle.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: ItemLeaseCycleRsUpdateComponent,
    resolve: {
      itemLeaseCycle: ItemLeaseCycleRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.itemLeaseCycle.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const itemLeaseCyclePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: ItemLeaseCycleRsDeletePopupComponent,
    resolve: {
      itemLeaseCycle: ItemLeaseCycleRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.itemLeaseCycle.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
