/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayFundAuthOrderAppFreezeModelRsUpdateComponent } from 'app/entities/alipay-fund-auth-order-app-freeze-model-rs/alipay-fund-auth-order-app-freeze-model-rs-update.component';
import { AlipayFundAuthOrderAppFreezeModelRsService } from 'app/entities/alipay-fund-auth-order-app-freeze-model-rs/alipay-fund-auth-order-app-freeze-model-rs.service';
import { AlipayFundAuthOrderAppFreezeModelRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';

describe('Component Tests', () => {
  describe('AlipayFundAuthOrderAppFreezeModelRs Management Update Component', () => {
    let comp: AlipayFundAuthOrderAppFreezeModelRsUpdateComponent;
    let fixture: ComponentFixture<AlipayFundAuthOrderAppFreezeModelRsUpdateComponent>;
    let service: AlipayFundAuthOrderAppFreezeModelRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFundAuthOrderAppFreezeModelRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(AlipayFundAuthOrderAppFreezeModelRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AlipayFundAuthOrderAppFreezeModelRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayFundAuthOrderAppFreezeModelRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new AlipayFundAuthOrderAppFreezeModelRs(123);
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
        const entity = new AlipayFundAuthOrderAppFreezeModelRs();
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
