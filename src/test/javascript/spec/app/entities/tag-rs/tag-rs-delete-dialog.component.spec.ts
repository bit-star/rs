/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RsTestModule } from '../../../test.module';
import { TagRsDeleteDialogComponent } from 'app/entities/tag-rs/tag-rs-delete-dialog.component';
import { TagRsService } from 'app/entities/tag-rs/tag-rs.service';

describe('Component Tests', () => {
  describe('TagRs Management Delete Component', () => {
    let comp: TagRsDeleteDialogComponent;
    let fixture: ComponentFixture<TagRsDeleteDialogComponent>;
    let service: TagRsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [TagRsDeleteDialogComponent]
      })
        .overrideTemplate(TagRsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TagRsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TagRsService);
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
