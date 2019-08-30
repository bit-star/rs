/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { AlipayUserRsDeleteDialogComponent } from 'app/entities/alipay-user-rs/alipay-user-rs-delete-dialog.component';
import { AlipayUserRsService } from 'app/entities/alipay-user-rs/alipay-user-rs.service';

describe('Component Tests', () => {
  describe('AlipayUserRs Management Delete Component', () => {
    let comp: AlipayUserRsDeleteDialogComponent;
    let fixture: ComponentFixture<AlipayUserRsDeleteDialogComponent>;
    let service: AlipayUserRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [AlipayUserRsDeleteDialogComponent]
      })
        .overrideTemplate(AlipayUserRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlipayUserRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AlipayUserRsService);
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
