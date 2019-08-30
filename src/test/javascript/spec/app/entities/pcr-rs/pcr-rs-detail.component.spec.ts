/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { PcrRsDetailComponent } from 'app/entities/pcr-rs/pcr-rs-detail.component';
import { PcrRs } from 'app/shared/model/pcr-rs.model';

describe('Component Tests', () => {
  describe('PcrRs Management Detail Component', () => {
    let comp: PcrRsDetailComponent;
    let fixture: ComponentFixture<PcrRsDetailComponent>;
    const route = ({ data: of({ pcr: new PcrRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [PcrRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(PcrRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PcrRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.pcr).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
