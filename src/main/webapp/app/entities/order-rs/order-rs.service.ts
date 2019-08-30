import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IOrderRs } from 'app/shared/model/order-rs.model';

type EntityResponseType = HttpResponse<IOrderRs>;
type EntityArrayResponseType = HttpResponse<IOrderRs[]>;

@Injectable({ providedIn: 'root' })
export class OrderRsService {
  public resourceUrl = SERVER_API_URL + 'api/orders';

  constructor(protected http: HttpClient) {}

  create(order: IOrderRs): Observable<EntityResponseType> {
    return this.http.post<IOrderRs>(this.resourceUrl, order, { observe: 'response' });
  }

  update(order: IOrderRs): Observable<EntityResponseType> {
    return this.http.put<IOrderRs>(this.resourceUrl, order, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IOrderRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IOrderRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
