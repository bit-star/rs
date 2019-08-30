import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPhotoRs } from 'app/shared/model/photo-rs.model';
import { PhotoRsService } from './photo-rs.service';

@Component({
  selector: 'jhi-photo-rs-delete-dialog',
  templateUrl: './photo-rs-delete-dialog.component.html'
})
export class PhotoRsDeleteDialogComponent {
  photo: IPhotoRs;

  constructor(protected photoService: PhotoRsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.photoService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'photoListModification',
        content: 'Deleted an photo'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-photo-rs-delete-popup',
  template: ''
})
export class PhotoRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ photo }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(PhotoRsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.photo = photo;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/photo-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/photo-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
