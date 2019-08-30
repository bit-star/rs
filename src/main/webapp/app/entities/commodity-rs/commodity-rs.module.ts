import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  CommodityRsComponent,
  CommodityRsDetailComponent,
  CommodityRsUpdateComponent,
  CommodityRsDeletePopupComponent,
  CommodityRsDeleteDialogComponent,
  commodityRoute,
  commodityPopupRoute
} from './';

const ENTITY_STATES = [...commodityRoute, ...commodityPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CommodityRsComponent,
    CommodityRsDetailComponent,
    CommodityRsUpdateComponent,
    CommodityRsDeleteDialogComponent,
    CommodityRsDeletePopupComponent
  ],
  entryComponents: [CommodityRsComponent, CommodityRsUpdateComponent, CommodityRsDeleteDialogComponent, CommodityRsDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsCommodityRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
