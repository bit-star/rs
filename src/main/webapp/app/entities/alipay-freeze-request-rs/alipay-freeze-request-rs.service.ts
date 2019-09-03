import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAlipayFreezeRequestRs } from 'app/shared/model/alipay-freeze-request-rs.model';

type EntityResponseType = HttpResponse<IAlipayFreezeRequestRs>;
type EntityArrayResponseType = HttpResponse<IAlipayFreezeRequestRs[]>;

@Injectable({ providedIn: 'root' })
export class AlipayFreezeRequestRsService {
  public resourceUrl = SERVER_API_URL + 'api/alipay-freeze-requests';

  constructor(protected http: HttpClient) {}

  create(alipayFreezeRequest: IAlipayFreezeRequestRs): Observable<EntityResponseType> {
    return this.http.post<IAlipayFreezeRequestRs>(this.resourceUrl, alipayFreezeRequest, { observe: 'response' });
  }

  update(alipayFreezeRequest: IAlipayFreezeRequestRs): Observable<EntityResponseType> {
    return this.http.put<IAlipayFreezeRequestRs>(this.resourceUrl, alipayFreezeRequest, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAlipayFreezeRequestRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAlipayFreezeRequestRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
