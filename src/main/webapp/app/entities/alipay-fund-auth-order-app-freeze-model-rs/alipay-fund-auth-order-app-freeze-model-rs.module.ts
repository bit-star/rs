import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  AlipayFundAuthOrderAppFreezeModelRsComponent,
  AlipayFundAuthOrderAppFreezeModelRsDetailComponent,
  AlipayFundAuthOrderAppFreezeModelRsUpdateComponent,
  AlipayFundAuthOrderAppFreezeModelRsDeletePopupComponent,
  AlipayFundAuthOrderAppFreezeModelRsDeleteDialogComponent,
  alipayFundAuthOrderAppFreezeModelRoute,
  alipayFundAuthOrderAppFreezeModelPopupRoute
} from './';

const ENTITY_STATES = [...alipayFundAuthOrderAppFreezeModelRoute, ...alipayFundAuthOrderAppFreezeModelPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AlipayFundAuthOrderAppFreezeModelRsComponent,
    AlipayFundAuthOrderAppFreezeModelRsDetailComponent,
    AlipayFundAuthOrderAppFreezeModelRsUpdateComponent,
    AlipayFundAuthOrderAppFreezeModelRsDeleteDialogComponent,
    AlipayFundAuthOrderAppFreezeModelRsDeletePopupComponent
  ],
  entryComponents: [
    AlipayFundAuthOrderAppFreezeModelRsComponent,
    AlipayFundAuthOrderAppFreezeModelRsUpdateComponent,
    AlipayFundAuthOrderAppFreezeModelRsDeleteDialogComponent,
    AlipayFundAuthOrderAppFreezeModelRsDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsAlipayFundAuthOrderAppFreezeModelRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
