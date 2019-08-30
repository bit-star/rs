/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { CommodityRsDeleteDialogComponent } from 'app/entities/commodity-rs/commodity-rs-delete-dialog.component';
import { CommodityRsService } from 'app/entities/commodity-rs/commodity-rs.service';

describe('Component Tests', () => {
  describe('CommodityRs Management Delete Component', () => {
    let comp: CommodityRsDeleteDialogComponent;
    let fixture: ComponentFixture<CommodityRsDeleteDialogComponent>;
    let service: CommodityRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [CommodityRsDeleteDialogComponent]
      })
        .overrideTemplate(CommodityRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CommodityRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CommodityRsService);
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
