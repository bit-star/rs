/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayFreezeResponseRsUpdateComponent } from 'app/entities/alipay-freeze-response-rs/alipay-freeze-response-rs-update.component';
import { AlipayFreezeResponseRsService } from 'app/entities/alipay-freeze-response-rs/alipay-freeze-response-rs.service';
import { AlipayFreezeResponseRs } from 'app/shared/model/alipay-freeze-response-rs.model';

describe('Component Tests', () => {
  describe('AlipayFreezeResponseRs Management Update Component', () => {
    let comp: AlipayFreezeResponseRsUpdateComponent;
    let fixture: ComponentFixture<AlipayFreezeResponseRsUpdateComponent>;
    let service: AlipayFreezeResponseRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFreezeResponseRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(AlipayFreezeResponseRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AlipayFreezeResponseRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayFreezeResponseRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new AlipayFreezeResponseRs(123);
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
        const entity = new AlipayFreezeResponseRs();
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
