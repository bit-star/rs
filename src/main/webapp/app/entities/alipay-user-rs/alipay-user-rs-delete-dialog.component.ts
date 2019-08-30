import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';
import { AlipayUserRsService } from './alipay-user-rs.service';

@Component({
  selector: 'jhi-alipay-user-rs-delete-dialog',
  templateUrl: './alipay-user-rs-delete-dialog.component.html'
})
export class AlipayUserRsDeleteDialogComponent {
  alipayUser: IAlipayUserRs;

  constructor(
    protected alipayUserService: AlipayUserRsService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.alipayUserService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'alipayUserListModification',
        content: 'Deleted an alipayUser'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-alipay-user-rs-delete-popup',
  template: ''
})
export class AlipayUserRsDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ alipayUser }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(AlipayUserRsDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.alipayUser = alipayUser;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/alipay-user-rs', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/alipay-user-rs', { outlets: { popup: null } }]);
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
