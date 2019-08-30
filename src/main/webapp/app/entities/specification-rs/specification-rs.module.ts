import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  SpecificationRsComponent,
  SpecificationRsDetailComponent,
  SpecificationRsUpdateComponent,
  SpecificationRsDeletePopupComponent,
  SpecificationRsDeleteDialogComponent,
  specificationRoute,
  specificationPopupRoute
} from './';

const ENTITY_STATES = [...specificationRoute, ...specificationPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    SpecificationRsComponent,
    SpecificationRsDetailComponent,
    SpecificationRsUpdateComponent,
    SpecificationRsDeleteDialogComponent,
    SpecificationRsDeletePopupComponent
  ],
  entryComponents: [
    SpecificationRsComponent,
    SpecificationRsUpdateComponent,
    SpecificationRsDeleteDialogComponent,
    SpecificationRsDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsSpecificationRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
