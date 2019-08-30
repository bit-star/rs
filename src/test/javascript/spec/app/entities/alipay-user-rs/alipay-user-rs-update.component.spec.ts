/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { AlipayUserRsUpdateComponent } from 'app/entities/alipay-user-rs/alipay-user-rs-update.component';
import { AlipayUserRsService } from 'app/entities/alipay-user-rs/alipay-user-rs.service';
import { AlipayUserRs } from 'app/shared/model/alipay-user-rs.model';

describe('Component Tests', () => {
  describe('AlipayUserRs Management Update Component', () => {
    let comp: AlipayUserRsUpdateComponent;
    let fixture: ComponentFixture<AlipayUserRsUpdateComponent>;
    let service: AlipayUserRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayUserRsUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(AlipayUserRsUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AlipayUserRsUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayUserRsService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new AlipayUserRs(123);
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
        const entity = new AlipayUserRs();
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
