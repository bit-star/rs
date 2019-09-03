/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayFreezeRequestRsDetailComponent } from 'app/entities/alipay-freeze-request-rs/alipay-freeze-request-rs-detail.component';
import { AlipayFreezeRequestRs } from 'app/shared/model/alipay-freeze-request-rs.model';

describe('Component Tests', () => {
  describe('AlipayFreezeRequestRs Management Detail Component', () => {
    let comp: AlipayFreezeRequestRsDetailComponent;
    let fixture: ComponentFixture<AlipayFreezeRequestRsDetailComponent>;
    const route = ({ data: of({ alipayFreezeRequest: new AlipayFreezeRequestRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFreezeRequestRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(AlipayFreezeRequestRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayFreezeRequestRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.alipayFreezeRequest).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
