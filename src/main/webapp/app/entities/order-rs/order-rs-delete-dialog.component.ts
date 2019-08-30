import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOrderRs } from 'app/shared/model/order-rs.model';
import { OrderRsService } from './order-rs.service';

@Component({
  selector: 'jhi-order-rs-delete-dialog',
  templateUrl: './order-rs-delete-dialog.component.html'
})
export class OrderRsDeleteDialogComponent {
  order: IOrderRs;

  constructor(protected orderService: OrderRsService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.orderService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'orderListModification',
        content: 'Deleted an order'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-order-rs-delete-popup',
  template: ''
})
export class OrderRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ order }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(OrderRsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.order = order;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/order-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/order-rs', { outlets: { popup: null } }]);
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
