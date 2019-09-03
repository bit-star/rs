import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAlipayFreezeResponseRs } from 'app/shared/model/alipay-freeze-response-rs.model';

type EntityResponseType = HttpResponse<IAlipayFreezeResponseRs>;
type EntityArrayResponseType = HttpResponse<IAlipayFreezeResponseRs[]>;

@Injectable({ providedIn: 'root' })
export class AlipayFreezeResponseRsService {
  public resourceUrl = SERVER_API_URL + 'api/alipay-freeze-responses';

  constructor(protected http: HttpClient) {}

  create(alipayFreezeResponse: IAlipayFreezeResponseRs): Observable<EntityResponseType> {
    return this.http.post<IAlipayFreezeResponseRs>(this.resourceUrl, alipayFreezeResponse, { observe: 'response' });
  }

  update(alipayFreezeResponse: IAlipayFreezeResponseRs): Observable<EntityResponseType> {
    return this.http.put<IAlipayFreezeResponseRs>(this.resourceUrl, alipayFreezeResponse, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAlipayFreezeResponseRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAlipayFreezeResponseRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
