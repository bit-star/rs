import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TagRs } from 'app/shared/model/tag-rs.model';
import { TagRsService } from './tag-rs.service';
import { TagRsComponent } from './tag-rs.component';
import { TagRsDetailComponent } from './tag-rs-detail.component';
import { TagRsUpdateComponent } from './tag-rs-update.component';
import { TagRsDeletePopupComponent } from './tag-rs-delete-dialog.component';
import { ITagRs } from 'app/shared/model/tag-rs.model';

@Injectable({ providedIn: 'root' })
export class TagRsResolve implements Resolve<ITagRs> {
  constructor(private service: TagRsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITagRs> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<TagRs>) => response.ok),
        map((tag: HttpResponse<TagRs>) => tag.body)
      );
    }
    return of(new TagRs());
  }
}

export const tagRoute: Routes = [
  {
    path: '',
    component: TagRsComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'rsApp.tag.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: TagRsDetailComponent,
    resolve: {
      tag: TagRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.tag.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: TagRsUpdateComponent,
    resolve: {
      tag: TagRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.tag.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: TagRsUpdateComponent,
    resolve: {
      tag: TagRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.tag.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const tagPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: TagRsDeletePopupComponent,
    resolve: {
      tag: TagRsResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'rsApp.tag.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
