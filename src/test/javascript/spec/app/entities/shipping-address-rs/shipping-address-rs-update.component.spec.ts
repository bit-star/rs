/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { ShippingAddressRsUpdateComponent } from 'app/entities/shipping-address-rs/shipping-address-rs-update.component';
import { ShippingAddressRsService } from 'app/entities/shipping-address-rs/shipping-address-rs.service';
import { ShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';

describe('Component Tests', () => {
  describe('ShippingAddressRs Management Update Component', () => {
    let comp: ShippingAddressRsUpdateComponent;
    let fixture: ComponentFixture<ShippingAddressRsUpdateComponent>;
    let service: ShippingAddressRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [ShippingAddressRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(ShippingAddressRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ShippingAddressRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ShippingAddressRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ShippingAddressRs(123);
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
        const entity = new ShippingAddressRs();
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
