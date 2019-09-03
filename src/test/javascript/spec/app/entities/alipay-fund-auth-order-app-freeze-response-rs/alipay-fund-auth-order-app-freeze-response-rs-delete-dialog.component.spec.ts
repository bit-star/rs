/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent } from 'app/entities/alipay-fund-auth-order-app-freeze-response-rs/alipay-fund-auth-order-app-freeze-response-rs-delete-dialog.component';
import { AlipayFundAuthOrderAppFreezeResponseRsService } from 'app/entities/alipay-fund-auth-order-app-freeze-response-rs/alipay-fund-auth-order-app-freeze-response-rs.service';

describe('Component Tests', () => {
  describe('AlipayFundAuthOrderAppFreezeResponseRs Management Delete Component', () => {
    let comp: AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent;
    let fixture: ComponentFixture<AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent>;
    let service: AlipayFundAuthOrderAppFreezeResponseRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent]
      })
        .overrideTemplate(AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayFundAuthOrderAppFreezeResponseRsService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
