import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAlipayFundAuthOrderAppFreezeResponseRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-response-rs.model';
import { AlipayFundAuthOrderAppFreezeResponseRsService } from './alipay-fund-auth-order-app-freeze-response-rs.service';

@Component({
  selector: 'jhi-alipay-fund-auth-order-app-freeze-response-rs-delete-dialog',
  templateUrl: './alipay-fund-auth-order-app-freeze-response-rs-delete-dialog.component.html'
})
export class AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent {
  alipayFundAuthOrderAppFreezeResponse: IAlipayFundAuthOrderAppFreezeResponseRs;

  constructor(
    protected alipayFundAuthOrderAppFreezeResponseService: AlipayFundAuthOrderAppFreezeResponseRsService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.alipayFundAuthOrderAppFreezeResponseService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'alipayFundAuthOrderAppFreezeResponseListModification',
        content: 'Deleted an alipayFundAuthOrderAppFreezeResponse'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-alipay-fund-auth-order-app-freeze-response-rs-delete-popup',
  template: ''
})
export class AlipayFundAuthOrderAppFreezeResponseRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ alipayFundAuthOrderAppFreezeResponse }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(AlipayFundAuthOrderAppFreezeResponseRsDeleteDialogComponent as Component, {
          size: 'lg',
          backdrop: 'static'
        });
        this.ngbModalRef.componentInstance.alipayFundAuthOrderAppFreezeResponse = alipayFundAuthOrderAppFreezeResponse;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/alipay-fund-auth-order-app-freeze-response-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/alipay-fund-auth-order-app-freeze-response-rs', { outlets: { popup: null } }]);
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
