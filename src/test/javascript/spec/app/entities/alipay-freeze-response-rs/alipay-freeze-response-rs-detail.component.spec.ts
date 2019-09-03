/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayFreezeResponseRsDetailComponent } from 'app/entities/alipay-freeze-response-rs/alipay-freeze-response-rs-detail.component';
import { AlipayFreezeResponseRs } from 'app/shared/model/alipay-freeze-response-rs.model';

describe('Component Tests', () => {
  describe('AlipayFreezeResponseRs Management Detail Component', () => {
    let comp: AlipayFreezeResponseRsDetailComponent;
    let fixture: ComponentFixture<AlipayFreezeResponseRsDetailComponent>;
    const route = ({ data: of({ alipayFreezeResponse: new AlipayFreezeResponseRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFreezeResponseRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(AlipayFreezeResponseRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayFreezeResponseRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.alipayFreezeResponse).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
