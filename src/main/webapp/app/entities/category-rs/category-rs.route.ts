import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CategoryRs } from 'app/shared/model/category-rs.model';
import { CategoryRsService } from './category-rs.service';
import { CategoryRsComponent } from './category-rs.component';
import { CategoryRsDetailComponent } from './category-rs-detail.component';
import { CategoryRsUpdateComponent } from './category-rs-update.component';
import { CategoryRsDeletePopupComponent } from './category-rs-delete-dialog.component';
import { ICategoryRs } from 'app/shared/model/category-rs.model';

@Injectable({ providedIn: 'root' })
export class CategoryRsResolve implements Resolve<ICategoryRs> {
  constructor(private service: CategoryRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategoryRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<CategoryRs>) => response.ok),
        map((category: HttpResponse<CategoryRs>) => category.body)
      );
    }
    return of(new CategoryRs());
  }
}

export const categoryRoute: Routes = [
  {
    path: '',
    component: CategoryRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.category.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: CategoryRsDetailComponent,
    resolve: {
      category: CategoryRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.category.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: CategoryRsUpdateComponent,
    resolve: {
      category: CategoryRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.category.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: CategoryRsUpdateComponent,
    resolve: {
      category: CategoryRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.category.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const categoryPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: CategoryRsDeletePopupComponent,
    resolve: {
      category: CategoryRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.category.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
