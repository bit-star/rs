/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { SpecificationRsDetailComponent } from 'app/entities/specification-rs/specification-rs-detail.component';
import { SpecificationRs } from 'app/shared/model/specification-rs.model';

describe('Component Tests', () => {
  describe('SpecificationRs Management Detail Component', () => {
    let comp: SpecificationRsDetailComponent;
    let fixture: ComponentFixture<SpecificationRsDetailComponent>;
    const route = ({ data: of({ specification: new SpecificationRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [SpecificationRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(SpecificationRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SpecificationRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.specification).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
