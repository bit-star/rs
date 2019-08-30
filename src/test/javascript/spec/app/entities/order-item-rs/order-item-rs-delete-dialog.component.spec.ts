/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { OrderItemRsDeleteDialogComponent } from 'app/entities/order-item-rs/order-item-rs-delete-dialog.component';
import { OrderItemRsService } from 'app/entities/order-item-rs/order-item-rs.service';

describe('Component Tests', () => {
  describe('OrderItemRs Management Delete Component', () => {
    let comp: OrderItemRsDeleteDialogComponent;
    let fixture: ComponentFixture<OrderItemRsDeleteDialogComponent>;
    let service: OrderItemRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [OrderItemRsDeleteDialogComponent]
      })
        .overrideTemplate(OrderItemRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(OrderItemRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(OrderItemRsService);
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
