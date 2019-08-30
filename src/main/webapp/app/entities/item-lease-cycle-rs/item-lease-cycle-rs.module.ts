import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { RsSharedModule } from 'app/shared';
import {
  ItemLeaseCycleRsComponent,
  ItemLeaseCycleRsDetailComponent,
  ItemLeaseCycleRsUpdateComponent,
  ItemLeaseCycleRsDeletePopupComponent,
  ItemLeaseCycleRsDeleteDialogComponent,
  itemLeaseCycleRoute,
  itemLeaseCyclePopupRoute
} from './';

const ENTITY_STATES = [...itemLeaseCycleRoute, ...itemLeaseCyclePopupRoute];

@NgModule({
  imports: [RsSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ItemLeaseCycleRsComponent,
    ItemLeaseCycleRsDetailComponent,
    ItemLeaseCycleRsUpdateComponent,
    ItemLeaseCycleRsDeleteDialogComponent,
    ItemLeaseCycleRsDeletePopupComponent
  ],
  entryComponents: [
    ItemLeaseCycleRsComponent,
    ItemLeaseCycleRsUpdateComponent,
    ItemLeaseCycleRsDeleteDialogComponent,
    ItemLeaseCycleRsDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsItemLeaseCycleRsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
