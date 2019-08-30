/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { SpecificationRsUpdateComponent } from 'app/entities/specification-rs/specification-rs-update.component';
import { SpecificationRsService } from 'app/entities/specification-rs/specification-rs.service';
import { SpecificationRs } from 'app/shared/model/specification-rs.model';

describe('Component Tests', () => {
  describe('SpecificationRs Management Update Component', () => {
    let comp: SpecificationRsUpdateComponent;
    let fixture: ComponentFixture<SpecificationRsUpdateComponent>;
    let service: SpecificationRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [SpecificationRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(SpecificationRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SpecificationRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SpecificationRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new SpecificationRs(123);
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
        const entity = new SpecificationRs();
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
