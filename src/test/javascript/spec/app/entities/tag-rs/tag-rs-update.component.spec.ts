/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { TagRsUpdateComponent } from 'app/entities/tag-rs/tag-rs-update.component';
import { TagRsService } from 'app/entities/tag-rs/tag-rs.service';
import { TagRs } from 'app/shared/model/tag-rs.model';

describe('Component Tests', () => {
  describe('TagRs Management Update Component', () => {
    let comp: TagRsUpdateComponent;
    let fixture: ComponentFixture<TagRsUpdateComponent>;
    let service: TagRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [TagRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(TagRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TagRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TagRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new TagRs(123);
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
        const entity = new TagRs();
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
