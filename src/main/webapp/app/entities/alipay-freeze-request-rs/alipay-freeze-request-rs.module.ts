import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  AlipayFreezeRequestRsComponent,
  AlipayFreezeRequestRsDetailComponent,
  AlipayFreezeRequestRsUpdateComponent,
  AlipayFreezeRequestRsDeletePopupComponent,
  AlipayFreezeRequestRsDeleteDialogComponent,
  alipayFreezeRequestRoute,
  alipayFreezeRequestPopupRoute
} from './';

const ENTITY_STATES = [...alipayFreezeRequestRoute, ...alipayFreezeRequestPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AlipayFreezeRequestRsComponent,
    AlipayFreezeRequestRsDetailComponent,
    AlipayFreezeRequestRsUpdateComponent,
    AlipayFreezeRequestRsDeleteDialogComponent,
    AlipayFreezeRequestRsDeletePopupComponent
  ],
  entryComponents: [
    AlipayFreezeRequestRsComponent,
    AlipayFreezeRequestRsUpdateComponent,
    AlipayFreezeRequestRsDeleteDialogComponent,
    AlipayFreezeRequestRsDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsAlipayFreezeRequestRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
