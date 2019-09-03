import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAlipayFundAuthOrderAppFreezeModelRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';
import { AlipayFundAuthOrderAppFreezeModelRsService } from './alipay-fund-auth-order-app-freeze-model-rs.service';

@Component({
  selector: 'jhi-alipay-fund-auth-order-app-freeze-model-rs-delete-dialog',
  templateUrl: './alipay-fund-auth-order-app-freeze-model-rs-delete-dialog.component.html'
})
export class AlipayFundAuthOrderAppFreezeModelRsDeleteDialogComponent {
  alipayFundAuthOrderAppFreezeModel: IAlipayFundAuthOrderAppFreezeModelRs;

  constructor(
    protected alipayFundAuthOrderAppFreezeModelService: AlipayFundAuthOrderAppFreezeModelRsService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.alipayFundAuthOrderAppFreezeModelService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'alipayFundAuthOrderAppFreezeModelListModification',
        content: 'Deleted an alipayFundAuthOrderAppFreezeModel'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-alipay-fund-auth-order-app-freeze-model-rs-delete-popup',
  template: ''
})
export class AlipayFundAuthOrderAppFreezeModelRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ alipayFundAuthOrderAppFreezeModel }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(AlipayFundAuthOrderAppFreezeModelRsDeleteDialogComponent as Component, {
          size: 'lg',
          backdrop: 'static'
        });
        this.ngbModalRef.componentInstance.alipayFundAuthOrderAppFreezeModel = alipayFundAuthOrderAppFreezeModel;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/alipay-fund-auth-order-app-freeze-model-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/alipay-fund-auth-order-app-freeze-model-rs', { outlets: { popup: null } }]);
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
