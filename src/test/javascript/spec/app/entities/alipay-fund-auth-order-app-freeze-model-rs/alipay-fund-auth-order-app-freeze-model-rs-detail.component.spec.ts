/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayFundAuthOrderAppFreezeModelRsDetailComponent } from 'app/entities/alipay-fund-auth-order-app-freeze-model-rs/alipay-fund-auth-order-app-freeze-model-rs-detail.component';
import { AlipayFundAuthOrderAppFreezeModelRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';

describe('Component Tests', () => {
  describe('AlipayFundAuthOrderAppFreezeModelRs Management Detail Component', () => {
    let comp: AlipayFundAuthOrderAppFreezeModelRsDetailComponent;
    let fixture: ComponentFixture<AlipayFundAuthOrderAppFreezeModelRsDetailComponent>;
    const route = ({
      data: of({ alipayFundAuthOrderAppFreezeModel: new AlipayFundAuthOrderAppFreezeModelRs(123) })
    } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFundAuthOrderAppFreezeModelRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(AlipayFundAuthOrderAppFreezeModelRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayFundAuthOrderAppFreezeModelRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.alipayFundAuthOrderAppFreezeModel).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
