import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICategoryRs } from 'app/shared/model/category-rs.model';

@Component({
  selector: 'jhi-category-rs-detail',
  templateUrl: './category-rs-detail.component.html'
})
export class CategoryRsDetailComponent implements OnInit {
  category: ICategoryRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ category }) => {
      this.category = category;
    });
  }

  previousState() {
    window.history.back();
  }
}
