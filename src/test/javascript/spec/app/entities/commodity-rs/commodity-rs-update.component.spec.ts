/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { CommodityRsUpdateComponent } from 'app/entities/commodity-rs/commodity-rs-update.component';
import { CommodityRsService } from 'app/entities/commodity-rs/commodity-rs.service';
import { CommodityRs } from 'app/shared/model/commodity-rs.model';

describe('Component Tests', () => {
  describe('CommodityRs Management Update Component', () => {
    let comp: CommodityRsUpdateComponent;
    let fixture: ComponentFixture<CommodityRsUpdateComponent>;
    let service: CommodityRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [CommodityRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(CommodityRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CommodityRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CommodityRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CommodityRs(123);
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
        const entity = new CommodityRs();
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
