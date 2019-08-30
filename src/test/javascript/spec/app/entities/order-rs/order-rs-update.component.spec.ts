/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { OrderRsUpdateComponent } from 'app/entities/order-rs/order-rs-update.component';
import { OrderRsService } from 'app/entities/order-rs/order-rs.service';
import { OrderRs } from 'app/shared/model/order-rs.model';

describe('Component Tests', () => {
  describe('OrderRs Management Update Component', () => {
    let comp: OrderRsUpdateComponent;
    let fixture: ComponentFixture<OrderRsUpdateComponent>;
    let service: OrderRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [OrderRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(OrderRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(OrderRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(OrderRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new OrderRs(123);
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
        const entity = new OrderRs();
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
