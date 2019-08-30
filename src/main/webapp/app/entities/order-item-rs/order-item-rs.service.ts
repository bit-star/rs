import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IOrderItemRs } from 'app/shared/model/order-item-rs.model';

type EntityResponseType = HttpResponse<IOrderItemRs>;
type EntityArrayResponseType = HttpResponse<IOrderItemRs[]>;

@Injectable({ providedIn: 'root' })
export class OrderItemRsService {
  public resourceUrl = SERVER_API_URL + 'api/order-items';

  constructor(protected http: HttpClient) {}

  create(orderItem: IOrderItemRs): Observable<EntityResponseType> {
    return this.http.post<IOrderItemRs>(this.resourceUrl, orderItem, { observe: 'response' });
  }

  update(orderItem: IOrderItemRs): Observable<EntityResponseType> {
    return this.http.put<IOrderItemRs>(this.resourceUrl, orderItem, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IOrderItemRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IOrderItemRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
