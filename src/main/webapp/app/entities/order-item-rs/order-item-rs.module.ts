import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  OrderItemRsComponent,
  OrderItemRsDetailComponent,
  OrderItemRsUpdateComponent,
  OrderItemRsDeletePopupComponent,
  OrderItemRsDeleteDialogComponent,
  orderItemRoute,
  orderItemPopupRoute
} from './';

const ENTITY_STATES = [...orderItemRoute, ...orderItemPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    OrderItemRsComponent,
    OrderItemRsDetailComponent,
    OrderItemRsUpdateComponent,
    OrderItemRsDeleteDialogComponent,
    OrderItemRsDeletePopupComponent
  ],
  entryComponents: [OrderItemRsComponent, OrderItemRsUpdateComponent, OrderItemRsDeleteDialogComponent, OrderItemRsDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsOrderItemRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
