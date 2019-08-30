/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { ShippingAddressRsDetailComponent } from 'app/entities/shipping-address-rs/shipping-address-rs-detail.component';
import { ShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';

describe('Component Tests', () => {
  describe('ShippingAddressRs Management Detail Component', () => {
    let comp: ShippingAddressRsDetailComponent;
    let fixture: ComponentFixture<ShippingAddressRsDetailComponent>;
    const route = ({ data: of({ shippingAddress: new ShippingAddressRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [ShippingAddressRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(ShippingAddressRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ShippingAddressRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.shippingAddress).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
