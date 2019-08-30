/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { TagRsDetailComponent } from 'app/entities/tag-rs/tag-rs-detail.component';
import { TagRs } from 'app/shared/model/tag-rs.model';

describe('Component Tests', () => {
  describe('TagRs Management Detail Component', () => {
    let comp: TagRsDetailComponent;
    let fixture: ComponentFixture<TagRsDetailComponent>;
    const route = ({ data: of({ tag: new TagRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [TagRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(TagRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TagRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.tag).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
