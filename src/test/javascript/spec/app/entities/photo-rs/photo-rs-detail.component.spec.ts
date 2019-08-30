/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { PhotoRsDetailComponent } from 'app/entities/photo-rs/photo-rs-detail.component';
import { PhotoRs } from 'app/shared/model/photo-rs.model';

describe('Component Tests', () => {
  describe('PhotoRs Management Detail Component', () => {
    let comp: PhotoRsDetailComponent;
    let fixture: ComponentFixture<PhotoRsDetailComponent>;
    const route = ({ data: of({ photo: new PhotoRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [PhotoRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(PhotoRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PhotoRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.photo).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
