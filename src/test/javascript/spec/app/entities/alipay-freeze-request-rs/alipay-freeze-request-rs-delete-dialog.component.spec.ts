/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { AlipayFreezeRequestRsDeleteDialogComponent } from 'app/entities/alipay-freeze-request-rs/alipay-freeze-request-rs-delete-dialog.component';
import { AlipayFreezeRequestRsService } from 'app/entities/alipay-freeze-request-rs/alipay-freeze-request-rs.service';

describe('Component Tests', () => {
  describe('AlipayFreezeRequestRs Management Delete Component', () => {
    let comp: AlipayFreezeRequestRsDeleteDialogComponent;
    let fixture: ComponentFixture<AlipayFreezeRequestRsDeleteDialogComponent>;
    let service: AlipayFreezeRequestRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFreezeRequestRsDeleteDialogComponent]
      })
        .overrideTemplate(AlipayFreezeRequestRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayFreezeRequestRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayFreezeRequestRsService);
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
