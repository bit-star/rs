import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IOrderItemRs } from 'app/shared/model/order-item-rs.model';
import { OrderItemRsService } from './order-item-rs.service';

@Component({
  selector: 'jhi-order-item-rs-delete-dialog',
  templateUrl: './order-item-rs-delete-dialog.component.html'
})
export class OrderItemRsDeleteDialogComponent {
  orderItem: IOrderItemRs;

  constructor(
    protected orderItemService: OrderItemRsService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.orderItemService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'orderItemListModification',
        content: 'Deleted an orderItem'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-order-item-rs-delete-popup',
  template: ''
})
export class OrderItemRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ orderItem }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(OrderItemRsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.orderItem = orderItem;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/order-item-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/order-item-rs', { outlets: { popup: null } }]);
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
