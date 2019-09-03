/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayFreezeRequestRsUpdateComponent } from 'app/entities/alipay-freeze-request-rs/alipay-freeze-request-rs-update.component';
import { AlipayFreezeRequestRsService } from 'app/entities/alipay-freeze-request-rs/alipay-freeze-request-rs.service';
import { AlipayFreezeRequestRs } from 'app/shared/model/alipay-freeze-request-rs.model';

describe('Component Tests', () => {
  describe('AlipayFreezeRequestRs Management Update Component', () => {
    let comp: AlipayFreezeRequestRsUpdateComponent;
    let fixture: ComponentFixture<AlipayFreezeRequestRsUpdateComponent>;
    let service: AlipayFreezeRequestRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFreezeRequestRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(AlipayFreezeRequestRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AlipayFreezeRequestRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayFreezeRequestRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new AlipayFreezeRequestRs(123);
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
        const entity = new AlipayFreezeRequestRs();
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
