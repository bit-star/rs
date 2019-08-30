import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SpecificationRs } from 'app/shared/model/specification-rs.model';
import { SpecificationRsService } from './specification-rs.service';
import { SpecificationRsComponent } from './specification-rs.component';
import { SpecificationRsDetailComponent } from './specification-rs-detail.component';
import { SpecificationRsUpdateComponent } from './specification-rs-update.component';
import { SpecificationRsDeletePopupComponent } from './specification-rs-delete-dialog.component';
import { ISpecificationRs } from 'app/shared/model/specification-rs.model';

@Injectable({ providedIn: 'root' })
export class SpecificationRsResolve implements Resolve<ISpecificationRs> {
  constructor(private service: SpecificationRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISpecificationRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<SpecificationRs>) => response.ok),
        map((specification: HttpResponse<SpecificationRs>) => specification.body)
      );
    }
    return of(new SpecificationRs());
  }
}

export const specificationRoute: Routes = [
  {
    path: '',
    component: SpecificationRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.specification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: SpecificationRsDetailComponent,
    resolve: {
      specification: SpecificationRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.specification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: SpecificationRsUpdateComponent,
    resolve: {
      specification: SpecificationRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.specification.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: SpecificationRsUpdateComponent,
    resolve: {
      specification: SpecificationRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.specification.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const specificationPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: SpecificationRsDeletePopupComponent,
    resolve: {
      specification: SpecificationRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.specification.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
