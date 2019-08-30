import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IItemLeaseCycleRs } from 'app/shared/model/item-lease-cycle-rs.model';

type EntityResponseType = HttpResponse<IItemLeaseCycleRs>;
type EntityArrayResponseType = HttpResponse<IItemLeaseCycleRs[]>;

@Injectable({ providedIn: 'root' })
export class ItemLeaseCycleRsService {
  public resourceUrl = SERVER_API_URL + 'api/item-lease-cycles';

  constructor(protected http: HttpClient) {}

  create(itemLeaseCycle: IItemLeaseCycleRs): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(itemLeaseCycle);
    return this.http
      .post<IItemLeaseCycleRs>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(itemLeaseCycle: IItemLeaseCycleRs): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(itemLeaseCycle);
    return this.http
      .put<IItemLeaseCycleRs>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IItemLeaseCycleRs>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IItemLeaseCycleRs[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(itemLeaseCycle: IItemLeaseCycleRs): IItemLeaseCycleRs {
    const copy: IItemLeaseCycleRs = Object.assign({}, itemLeaseCycle, {
      startTime: itemLeaseCycle.startTime != null && itemLeaseCycle.startTime.isValid() ? itemLeaseCycle.startTime.toJSON() : null,
      endTime: itemLeaseCycle.endTime != null && itemLeaseCycle.endTime.isValid() ? itemLeaseCycle.endTime.toJSON() : null,
      nextBillDay: itemLeaseCycle.nextBillDay != null && itemLeaseCycle.nextBillDay.isValid() ? itemLeaseCycle.nextBillDay.toJSON() : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.startTime = res.body.startTime != null ? moment(res.body.startTime) : null;
      res.body.endTime = res.body.endTime != null ? moment(res.body.endTime) : null;
      res.body.nextBillDay = res.body.nextBillDay != null ? moment(res.body.nextBillDay) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((itemLeaseCycle: IItemLeaseCycleRs) => {
        itemLeaseCycle.startTime = itemLeaseCycle.startTime != null ? moment(itemLeaseCycle.startTime) : null;
        itemLeaseCycle.endTime = itemLeaseCycle.endTime != null ? moment(itemLeaseCycle.endTime) : null;
        itemLeaseCycle.nextBillDay = itemLeaseCycle.nextBillDay != null ? moment(itemLeaseCycle.nextBillDay) : null;
      });
    }
    return res;
  }
}
