import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  AlipayFreezeResponseRsComponent,
  AlipayFreezeResponseRsDetailComponent,
  AlipayFreezeResponseRsUpdateComponent,
  AlipayFreezeResponseRsDeletePopupComponent,
  AlipayFreezeResponseRsDeleteDialogComponent,
  alipayFreezeResponseRoute,
  alipayFreezeResponsePopupRoute
} from './';

const ENTITY_STATES = [...alipayFreezeResponseRoute, ...alipayFreezeResponsePopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AlipayFreezeResponseRsComponent,
    AlipayFreezeResponseRsDetailComponent,
    AlipayFreezeResponseRsUpdateComponent,
    AlipayFreezeResponseRsDeleteDialogComponent,
    AlipayFreezeResponseRsDeletePopupComponent
  ],
  entryComponents: [
    AlipayFreezeResponseRsComponent,
    AlipayFreezeResponseRsUpdateComponent,
    AlipayFreezeResponseRsDeleteDialogComponent,
    AlipayFreezeResponseRsDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsAlipayFreezeResponseRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
