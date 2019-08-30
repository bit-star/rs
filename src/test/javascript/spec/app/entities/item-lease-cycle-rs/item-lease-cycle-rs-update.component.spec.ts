/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { ItemLeaseCycleRsUpdateComponent } from 'app/entities/item-lease-cycle-rs/item-lease-cycle-rs-update.component';
import { ItemLeaseCycleRsService } from 'app/entities/item-lease-cycle-rs/item-lease-cycle-rs.service';
import { ItemLeaseCycleRs } from 'app/shared/model/item-lease-cycle-rs.model';

describe('Component Tests', () => {
  describe('ItemLeaseCycleRs Management Update Component', () => {
    let comp: ItemLeaseCycleRsUpdateComponent;
    let fixture: ComponentFixture<ItemLeaseCycleRsUpdateComponent>;
    let service: ItemLeaseCycleRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [ItemLeaseCycleRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(ItemLeaseCycleRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ItemLeaseCycleRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ItemLeaseCycleRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ItemLeaseCycleRs(123);
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
        const entity = new ItemLeaseCycleRs();
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
