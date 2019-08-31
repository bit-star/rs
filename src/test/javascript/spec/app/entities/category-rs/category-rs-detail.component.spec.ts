/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { CategoryRsDetailComponent } from 'app/entities/category-rs/category-rs-detail.component';
import { CategoryRs } from 'app/shared/model/category-rs.model';

describe('Component Tests', () => {
  describe('CategoryRs Management Detail Component', () => {
    let comp: CategoryRsDetailComponent;
    let fixture: ComponentFixture<CategoryRsDetailComponent>;
    const route = ({ data: of({ category: new CategoryRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [CategoryRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(CategoryRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CategoryRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.category).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
