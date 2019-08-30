import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISpecificationRs } from 'app/shared/model/specification-rs.model';

@Component({
  selector: 'jhi-specification-rs-detail',
  templateUrl: './specification-rs-detail.component.html'
})
export class SpecificationRsDetailComponent implements OnInit {
  specification: ISpecificationRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ specification }) => {
      this.specification = specification;
    });
  }

  previousState() {
    window.history.back();
  }
}
