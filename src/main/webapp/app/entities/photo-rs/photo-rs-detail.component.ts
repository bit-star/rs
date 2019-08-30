import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPhotoRs } from 'app/shared/model/photo-rs.model';

@Component({
  selector: 'jhi-photo-rs-detail',
  templateUrl: './photo-rs-detail.component.html'
})
export class PhotoRsDetailComponent implements OnInit {
  photo: IPhotoRs;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ photo }) => {
      this.photo = photo;
    });
  }

  previousState() {
    window.history.back();
  }
}
