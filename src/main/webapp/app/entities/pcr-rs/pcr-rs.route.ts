import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PcrRs } from 'app/shared/model/pcr-rs.model';
import { PcrRsService } from './pcr-rs.service';
import { PcrRsComponent } from './pcr-rs.component';
import { PcrRsDetailComponent } from './pcr-rs-detail.component';
import { PcrRsUpdateComponent } from './pcr-rs-update.component';
import { PcrRsDeletePopupComponent } from './pcr-rs-delete-dialog.component';
import { IPcrRs } from 'app/shared/model/pcr-rs.model';

@Injectable({ providedIn: 'root' })
export class PcrRsResolve implements Resolve<IPcrRs> {
  constructor(private service: PcrRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPcrRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<PcrRs>) => response.ok),
        map((pcr: HttpResponse<PcrRs>) => pcr.body)
      );
    }
    return of(new PcrRs());
  }
}

export const pcrRoute: Routes = [
  {
    path: '',
    component: PcrRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.pcr.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: PcrRsDetailComponent,
    resolve: {
      pcr: PcrRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.pcr.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: PcrRsUpdateComponent,
    resolve: {
      pcr: PcrRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.pcr.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: PcrRsUpdateComponent,
    resolve: {
      pcr: PcrRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.pcr.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const pcrPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: PcrRsDeletePopupComponent,
    resolve: {
      pcr: PcrRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.pcr.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
