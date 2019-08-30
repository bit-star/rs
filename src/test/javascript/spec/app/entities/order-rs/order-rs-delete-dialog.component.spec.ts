/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { OrderRsDeleteDialogComponent } from 'app/entities/order-rs/order-rs-delete-dialog.component';
import { OrderRsService } from 'app/entities/order-rs/order-rs.service';

describe('Component Tests', () => {
  describe('OrderRs Management Delete Component', () => {
    let comp: OrderRsDeleteDialogComponent;
    let fixture: ComponentFixture<OrderRsDeleteDialogComponent>;
    let service: OrderRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [OrderRsDeleteDialogComponent]
      })
        .overrideTemplate(OrderRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(OrderRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(OrderRsService);
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
