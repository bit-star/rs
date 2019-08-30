import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICommodityRs } from 'app/shared/model/commodity-rs.model';
import { CommodityRsService } from './commodity-rs.service';

@Component({
  selector: 'jhi-commodity-rs-delete-dialog',
  templateUrl: './commodity-rs-delete-dialog.component.html'
})
export class CommodityRsDeleteDialogComponent {
  commodity: ICommodityRs;

  constructor(
    protected commodityService: CommodityRsService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.commodityService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'commodityListModification',
        content: 'Deleted an commodity'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-commodity-rs-delete-popup',
  template: ''
})
export class CommodityRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ commodity }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(CommodityRsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.commodity = commodity;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/commodity-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/commodity-rs', { outlets: { popup: null } }]);
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
