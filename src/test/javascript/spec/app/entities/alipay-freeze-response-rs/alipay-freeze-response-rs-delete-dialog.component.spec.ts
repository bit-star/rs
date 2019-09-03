/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { AlipayFreezeResponseRsDeleteDialogComponent } from 'app/entities/alipay-freeze-response-rs/alipay-freeze-response-rs-delete-dialog.component';
import { AlipayFreezeResponseRsService } from 'app/entities/alipay-freeze-response-rs/alipay-freeze-response-rs.service';

describe('Component Tests', () => {
  describe('AlipayFreezeResponseRs Management Delete Component', () => {
    let comp: AlipayFreezeResponseRsDeleteDialogComponent;
    let fixture: ComponentFixture<AlipayFreezeResponseRsDeleteDialogComponent>;
    let service: AlipayFreezeResponseRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayFreezeResponseRsDeleteDialogComponent]
      })
        .overrideTemplate(AlipayFreezeResponseRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayFreezeResponseRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayFreezeResponseRsService);
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
