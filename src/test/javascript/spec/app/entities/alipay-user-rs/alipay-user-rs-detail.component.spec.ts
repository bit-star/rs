/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayUserRsDetailComponent } from 'app/entities/alipay-user-rs/alipay-user-rs-detail.component';
import { AlipayUserRs } from 'app/shared/model/alipay-user-rs.model';

describe('Component Tests', () => {
  describe('AlipayUserRs Management Detail Component', () => {
    let comp: AlipayUserRsDetailComponent;
    let fixture: ComponentFixture<AlipayUserRsDetailComponent>;
    const route = ({ data: of({ alipayUser: new AlipayUserRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayUserRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(AlipayUserRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayUserRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.alipayUser).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
