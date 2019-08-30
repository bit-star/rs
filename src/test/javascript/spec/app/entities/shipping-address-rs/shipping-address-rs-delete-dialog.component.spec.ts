/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { ShippingAddressRsDeleteDialogComponent } from 'app/entities/shipping-address-rs/shipping-address-rs-delete-dialog.component';
import { ShippingAddressRsService } from 'app/entities/shipping-address-rs/shipping-address-rs.service';

describe('Component Tests', () => {
  describe('ShippingAddressRs Management Delete Component', () => {
    let comp: ShippingAddressRsDeleteDialogComponent;
    let fixture: ComponentFixture<ShippingAddressRsDeleteDialogComponent>;
    let service: ShippingAddressRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [ShippingAddressRsDeleteDialogComponent]
      })
        .overrideTemplate(ShippingAddressRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ShippingAddressRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ShippingAddressRsService);
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
