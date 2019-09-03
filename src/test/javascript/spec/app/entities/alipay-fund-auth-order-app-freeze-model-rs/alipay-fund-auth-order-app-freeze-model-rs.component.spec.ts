/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Data } from '@angular/router';

import { RsTestModule } from '../../../test.module';
import { AlipayFundAuthOrderAppFreezeModelRsComponent } from 'app/entities/alipay-fund-auth-order-app-freeze-model-rs/alipay-fund-auth-order-app-freeze-model-rs.component';
import { AlipayFundAuthOrderAppFreezeModelRsService } from 'app/entities/alipay-fund-auth-order-app-freeze-model-rs/alipay-fund-auth-order-app-freeze-model-rs.service';
import { AlipayFundAuthOrderAppFreezeModelRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';

describe('Component Tests', () => {
  describe('AlipayFundAuthOrderAppFreezeModelRs Management Component', () => {
    let comp: AlipayFundAuthOrderAppFreezeModelRsComponent;
    let fixture: ComponentFixture<AlipayFundAuthOrderAppFreezeModelRsComponent>;
    let service: AlipayFundAuthOrderAppFreezeModelRsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFundAuthOrderAppFreezeModelRsComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              data: {
                subscribe: (fn: (value: Data) => void) =>
                  fn({
                    pagingParams: {
                      predicate: 'id',
                      reverse: false,
                      page: 0
                    }
                  })
              }
            }
          }
        ]
      })
        .overrideTemplate(AlipayFundAuthOrderAppFreezeModelRsComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AlipayFundAuthOrderAppFreezeModelRsComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayFundAuthOrderAppFreezeModelRsService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new AlipayFundAuthOrderAppFreezeModelRs(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.alipayFundAuthOrderAppFreezeModels[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new AlipayFundAuthOrderAppFreezeModelRs(123)],
            headers
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.alipayFundAuthOrderAppFreezeModels[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should not load a page is the page is the same as the previous page', () => {
      spyOn(service, 'query').and.callThrough();

      // WHEN
      comp.loadPage(0);

      // THEN
      expect(service.query).toHaveBeenCalledTimes(0);
    });

    it('should re-initialize the page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new AlipayFundAuthOrderAppFreezeModelRs(123)],
            headers
          })
        )
      );

      // WHEN
      comp.loadPage(1);
      comp.clear();

      // THEN
      expect(comp.page).toEqual(0);
      expect(service.query).toHaveBeenCalledTimes(2);
      expect(comp.alipayFundAuthOrderAppFreezeModels[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
    it('should calculate the sort attribute for an id', () => {
      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });
  });
});
