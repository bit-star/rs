import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISpecificationRs } from 'app/shared/model/specification-rs.model';
import { SpecificationRsService } from './specification-rs.service';

@Component({
  selector: 'jhi-specification-rs-delete-dialog',
  templateUrl: './specification-rs-delete-dialog.component.html'
})
export class SpecificationRsDeleteDialogComponent {
  specification: ISpecificationRs;

  constructor(
    protected specificationService: SpecificationRsService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.specificationService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'specificationListModification',
        content: 'Deleted an specification'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-specification-rs-delete-popup',
  template: ''
})
export class SpecificationRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ specification }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(SpecificationRsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.specification = specification;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/specification-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/specification-rs', { outlets: { popup: null } }]);
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
