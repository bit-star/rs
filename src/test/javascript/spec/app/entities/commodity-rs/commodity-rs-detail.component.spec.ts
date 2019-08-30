/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { CommodityRsDetailComponent } from 'app/entities/commodity-rs/commodity-rs-detail.component';
import { CommodityRs } from 'app/shared/model/commodity-rs.model';

describe('Component Tests', () => {
  describe('CommodityRs Management Detail Component', () => {
    let comp: CommodityRsDetailComponent;
    let fixture: ComponentFixture<CommodityRsDetailComponent>;
    const route = ({ data: of({ commodity: new CommodityRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [CommodityRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(CommodityRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CommodityRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.commodity).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
