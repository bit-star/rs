/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayFundAuthOrderAppFreezeResponseRsDetailComponent } from 'app/entities/alipay-fund-auth-order-app-freeze-response-rs/alipay-fund-auth-order-app-freeze-response-rs-detail.component';
import { AlipayFundAuthOrderAppFreezeResponseRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-response-rs.model';

describe('Component Tests', () => {
  describe('AlipayFundAuthOrderAppFreezeResponseRs Management Detail Component', () => {
    let comp: AlipayFundAuthOrderAppFreezeResponseRsDetailComponent;
    let fixture: ComponentFixture<AlipayFundAuthOrderAppFreezeResponseRsDetailComponent>;
    const route = ({
      data: of({ alipayFundAuthOrderAppFreezeResponse: new AlipayFundAuthOrderAppFreezeResponseRs(123) })
    } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFundAuthOrderAppFreezeResponseRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(AlipayFundAuthOrderAppFreezeResponseRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayFundAuthOrderAppFreezeResponseRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.alipayFundAuthOrderAppFreezeResponse).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
