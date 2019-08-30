import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  PcrRsComponent,
  PcrRsDetailComponent,
  PcrRsUpdateComponent,
  PcrRsDeletePopupComponent,
  PcrRsDeleteDialogComponent,
  pcrRoute,
  pcrPopupRoute
} from './';

const ENTITY_STATES = [...pcrRoute, ...pcrPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [PcrRsComponent, PcrRsDetailComponent, PcrRsUpdateComponent, PcrRsDeleteDialogComponent, PcrRsDeletePopupComponent],
  entryComponents: [PcrRsComponent, PcrRsUpdateComponent, PcrRsDeleteDialogComponent, PcrRsDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsPcrRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
