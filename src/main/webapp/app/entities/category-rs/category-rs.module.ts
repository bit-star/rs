import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  CategoryRsComponent,
  CategoryRsDetailComponent,
  CategoryRsUpdateComponent,
  CategoryRsDeletePopupComponent,
  CategoryRsDeleteDialogComponent,
  categoryRoute,
  categoryPopupRoute
} from './';

const ENTITY_STATES = [...categoryRoute, ...categoryPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CategoryRsComponent,
    CategoryRsDetailComponent,
    CategoryRsUpdateComponent,
    CategoryRsDeleteDialogComponent,
    CategoryRsDeletePopupComponent
  ],
  entryComponents: [CategoryRsComponent, CategoryRsUpdateComponent, CategoryRsDeleteDialogComponent, CategoryRsDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsCategoryRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
