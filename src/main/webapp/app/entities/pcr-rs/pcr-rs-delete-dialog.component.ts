import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPcrRs } from 'app/shared/model/pcr-rs.model';
import { PcrRsService } from './pcr-rs.service';

@Component({
  selector: 'jhi-pcr-rs-delete-dialog',
  templateUrl: './pcr-rs-delete-dialog.component.html'
})
export class PcrRsDeleteDialogComponent {
  pcr: IPcrRs;

  constructor(protected pcrService: PcrRsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.pcrService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'pcrListModification',
        content: 'Deleted an pcr'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-pcr-rs-delete-popup',
  template: ''
})
export class PcrRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ pcr }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(PcrRsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.pcr = pcr;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/pcr-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/pcr-rs', { outlets: { popup: null } }]);
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
