import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITagRs } from 'app/shared/model/tag-rs.model';

@Component({
  selector: 'jhi-tag-rs-detail',
  templateUrl: './tag-rs-detail.component.html'
})
export class TagRsDetailComponent implements OnInit {
  tag: ITagRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ tag }) => {
      this.tag = tag;
    });
  }

  previousState() {
    window.history.back();
  }
}
