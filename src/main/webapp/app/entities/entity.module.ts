import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'shipping-address-rs',
        loadChildren: () => import('./shipping-address-rs/shipping-address-rs.module').then(m => m.RsShippingAddressRsModule)
      },
      {
        path: 'pcr-rs',
        loadChildren: () => import('./pcr-rs/pcr-rs.module').then(m => m.RsPcrRsModule)
      },
      {
        path: 'commodity-rs',
        loadChildren: () => import('./commodity-rs/commodity-rs.module').then(m => m.RsCommodityRsModule)
      },
      {
        path: 'photo-rs',
        loadChildren: () => import('./photo-rs/photo-rs.module').then(m => m.RsPhotoRsModule)
      },
      {
        path: 'specification-rs',
        loadChildren: () => import('./specification-rs/specification-rs.module').then(m => m.RsSpecificationRsModule)
      },
      {
        path: 'order-rs',
        loadChildren: () => import('./order-rs/order-rs.module').then(m => m.RsOrderRsModule)
      },
      {
        path: 'order-item-rs',
        loadChildren: () => import('./order-item-rs/order-item-rs.module').then(m => m.RsOrderItemRsModule)
      },
      {
        path: 'item-lease-cycle-rs',
        loadChildren: () => import('./item-lease-cycle-rs/item-lease-cycle-rs.module').then(m => m.RsItemLeaseCycleRsModule)
      },
      {
        path: 'alipay-user-rs',
        loadChildren: () => import('./alipay-user-rs/alipay-user-rs.module').then(m => m.RsAlipayUserRsModule)
      },
      {
        path: 'tag-rs',
        loadChildren: () => import('./tag-rs/tag-rs.module').then(m => m.RsTagRsModule)
      },
      {
        path: 'category-rs',
        loadChildren: () => import('./category-rs/category-rs.module').then(m => m.RsCategoryRsModule)
      },
      {
        path: 'alipay-freeze-request-rs',
        loadChildren: () => import('./alipay-freeze-request-rs/alipay-freeze-request-rs.module').then(m => m.RsAlipayFreezeRequestRsModule)
      },
      {
        path: 'alipay-freeze-response-rs',
        loadChildren: () =>
          import('./alipay-freeze-response-rs/alipay-freeze-response-rs.module').then(m => m.RsAlipayFreezeResponseRsModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RsEntityModule {}
