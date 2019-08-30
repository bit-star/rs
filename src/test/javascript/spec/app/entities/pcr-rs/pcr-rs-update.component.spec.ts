/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { PcrRsUpdateComponent } from 'app/entities/pcr-rs/pcr-rs-update.component';
import { PcrRsService } from 'app/entities/pcr-rs/pcr-rs.service';
import { PcrRs } from 'app/shared/model/pcr-rs.model';

describe('Component Tests', () => {
  describe('PcrRs Management Update Component', () => {
    let comp: PcrRsUpdateComponent;
    let fixture: ComponentFixture<PcrRsUpdateComponent>;
    let service: PcrRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [PcrRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(PcrRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PcrRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PcrRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PcrRs(123);
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
        const entity = new PcrRs();
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
