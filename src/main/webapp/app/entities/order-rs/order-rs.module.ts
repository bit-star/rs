import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  OrderRsComponent,
  OrderRsDetailComponent,
  OrderRsUpdateComponent,
  OrderRsDeletePopupComponent,
  OrderRsDeleteDialogComponent,
  orderRoute,
  orderPopupRoute
} from './';

const ENTITY_STATES = [...orderRoute, ...orderPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    OrderRsComponent,
    OrderRsDetailComponent,
    OrderRsUpdateComponent,
    OrderRsDeleteDialogComponent,
    OrderRsDeletePopupComponent
  ],
  entryComponents: [OrderRsComponent, OrderRsUpdateComponent, OrderRsDeleteDialogComponent, OrderRsDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsOrderRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
