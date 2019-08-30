/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { PhotoRsDeleteDialogComponent } from 'app/entities/photo-rs/photo-rs-delete-dialog.component';
import { PhotoRsService } from 'app/entities/photo-rs/photo-rs.service';

describe('Component Tests', () => {
  describe('PhotoRs Management Delete Component', () => {
    let comp: PhotoRsDeleteDialogComponent;
    let fixture: ComponentFixture<PhotoRsDeleteDialogComponent>;
    let service: PhotoRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [PhotoRsDeleteDialogComponent]
      })
        .overrideTemplate(PhotoRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PhotoRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PhotoRsService);
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
