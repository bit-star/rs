import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IItemLeaseCycleRs } from 'app/shared/model/item-lease-cycle-rs.model';
import { ItemLeaseCycleRsService } from './item-lease-cycle-rs.service';

@Component({
  selector: 'jhi-item-lease-cycle-rs-delete-dialog',
  templateUrl: './item-lease-cycle-rs-delete-dialog.component.html'
})
export class ItemLeaseCycleRsDeleteDialogComponent {
  itemLeaseCycle: IItemLeaseCycleRs;

  constructor(
    protected itemLeaseCycleService: ItemLeaseCycleRsService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.itemLeaseCycleService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'itemLeaseCycleListModification',
        content: 'Deleted an itemLeaseCycle'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-item-lease-cycle-rs-delete-popup',
  template: ''
})
export class ItemLeaseCycleRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ itemLeaseCycle }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(ItemLeaseCycleRsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.itemLeaseCycle = itemLeaseCycle;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/item-lease-cycle-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/item-lease-cycle-rs', { outlets: { popup: null } }]);
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
