import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [RsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsSharedModule {
  static forRoot() {
    return {
      ngModule: RsSharedModule
    };
  }
}
