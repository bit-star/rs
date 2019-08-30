import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  AlipayUserRsComponent,
  AlipayUserRsDetailComponent,
  AlipayUserRsUpdateComponent,
  AlipayUserRsDeletePopupComponent,
  AlipayUserRsDeleteDialogComponent,
  alipayUserRoute,
  alipayUserPopupRoute
} from './';

const ENTITY_STATES = [...alipayUserRoute, ...alipayUserPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AlipayUserRsComponent,
    AlipayUserRsDetailComponent,
    AlipayUserRsUpdateComponent,
    AlipayUserRsDeleteDialogComponent,
    AlipayUserRsDeletePopupComponent
  ],
  entryComponents: [
    AlipayUserRsComponent,
    AlipayUserRsUpdateComponent,
    AlipayUserRsDeleteDialogComponent,
    AlipayUserRsDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsAlipayUserRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
