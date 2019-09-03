import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  AlipayFundAuthOrderAppFreezeResponseRsComponent,
  AlipayFundAuthOrderAppFreezeResponseRsDetailComponent,
  AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent,
  AlipayFundAuthOrderAppFreezeResponseRsDeletePopupComponent,
  AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent,
  alipayFundAuthOrderAppFreezeResponseRoute,
  alipayFundAuthOrderAppFreezeResponsePopupRoute
} from './';

const ENTITY_STATES = [...alipayFundAuthOrderAppFreezeResponseRoute, ...alipayFundAuthOrderAppFreezeResponsePopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AlipayFundAuthOrderAppFreezeResponseRsComponent,
    AlipayFundAuthOrderAppFreezeResponseRsDetailComponent,
    AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent,
    AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent,
    AlipayFundAuthOrderAppFreezeResponseRsDeletePopupComponent
  ],
  entryComponents: [
    AlipayFundAuthOrderAppFreezeResponseRsComponent,
    AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent,
    AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent,
    AlipayFundAuthOrderAppFreezeResponseRsDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsAlipayFundAuthOrderAppFreezeResponseRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
