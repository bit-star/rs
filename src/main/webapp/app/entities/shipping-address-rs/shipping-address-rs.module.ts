import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  ShippingAddressRsComponent,
  ShippingAddressRsDetailComponent,
  ShippingAddressRsUpdateComponent,
  ShippingAddressRsDeletePopupComponent,
  ShippingAddressRsDeleteDialogComponent,
  shippingAddressRoute,
  shippingAddressPopupRoute
} from './';

const ENTITY_STATES = [...shippingAddressRoute, ...shippingAddressPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ShippingAddressRsComponent,
    ShippingAddressRsDetailComponent,
    ShippingAddressRsUpdateComponent,
    ShippingAddressRsDeleteDialogComponent,
    ShippingAddressRsDeletePopupComponent
  ],
  entryComponents: [
    ShippingAddressRsComponent,
    ShippingAddressRsUpdateComponent,
    ShippingAddressRsDeleteDialogComponent,
    ShippingAddressRsDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsShippingAddressRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
