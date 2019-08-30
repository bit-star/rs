import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  PhotoRsComponent,
  PhotoRsDetailComponent,
  PhotoRsUpdateComponent,
  PhotoRsDeletePopupComponent,
  PhotoRsDeleteDialogComponent,
  photoRoute,
  photoPopupRoute
} from './';

const ENTITY_STATES = [...photoRoute, ...photoPopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    PhotoRsComponent,
    PhotoRsDetailComponent,
    PhotoRsUpdateComponent,
    PhotoRsDeleteDialogComponent,
    PhotoRsDeletePopupComponent
  ],
  entryComponents: [PhotoRsComponent, PhotoRsUpdateComponent, PhotoRsDeleteDialogComponent, PhotoRsDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsPhotoRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
