/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { PhotoRsUpdateComponent } from 'app/entities/photo-rs/photo-rs-update.component';
import { PhotoRsService } from 'app/entities/photo-rs/photo-rs.service';
import { PhotoRs } from 'app/shared/model/photo-rs.model';

describe('Component Tests', () => {
  describe('PhotoRs Management Update Component', () => {
    let comp: PhotoRsUpdateComponent;
    let fixture: ComponentFixture<PhotoRsUpdateComponent>;
    let service: PhotoRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [PhotoRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(PhotoRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PhotoRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PhotoRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PhotoRs(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new PhotoRs();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
