/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { ItemLeaseCycleRsDeleteDialogComponent } from 'app/entities/item-lease-cycle-rs/item-lease-cycle-rs-delete-dialog.component';
import { ItemLeaseCycleRsService } from 'app/entities/item-lease-cycle-rs/item-lease-cycle-rs.service';

describe('Component Tests', () => {
  describe('ItemLeaseCycleRs Management Delete Component', () => {
    let comp: ItemLeaseCycleRsDeleteDialogComponent;
    let fixture: ComponentFixture<ItemLeaseCycleRsDeleteDialogComponent>;
    let service: ItemLeaseCycleRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [ItemLeaseCycleRsDeleteDialogComponent]
      })
        .overrideTemplate(ItemLeaseCycleRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ItemLeaseCycleRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ItemLeaseCycleRsService);
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
