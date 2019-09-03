/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent } from 'app/entities/alipay-fund-auth-order-app-freeze-response-rs/alipay-fund-auth-order-app-freeze-response-rs-update.component';
import { AlipayFundAuthOrderAppFreezeResponseRsService } from 'app/entities/alipay-fund-auth-order-app-freeze-response-rs/alipay-fund-auth-order-app-freeze-response-rs.service';
import { AlipayFundAuthOrderAppFreezeResponseRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-response-rs.model';

describe('Component Tests', () => {
  describe('AlipayFundAuthOrderAppFreezeResponseRs Management Update Component', () => {
    let comp: AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent;
    let fixture: ComponentFixture<AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent>;
    let service: AlipayFundAuthOrderAppFreezeResponseRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AlipayFundAuthOrderAppFreezeResponseRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayFundAuthOrderAppFreezeResponseRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new AlipayFundAuthOrderAppFreezeResponseRs(123);
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
        const entity = new AlipayFundAuthOrderAppFreezeResponseRs();
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
