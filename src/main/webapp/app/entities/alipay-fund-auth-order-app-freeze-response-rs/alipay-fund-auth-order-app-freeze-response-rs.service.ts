import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAlipayFundAuthOrderAppFreezeResponseRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-response-rs.model';

type EntityResponseType = HttpResponse<IAlipayFundAuthOrderAppFreezeResponseRs>;
type EntityArrayResponseType = HttpResponse<IAlipayFundAuthOrderAppFreezeResponseRs[]>;

@Injectable({ providedIn: 'root' })
export class AlipayFundAuthOrderAppFreezeResponseRsService {
  public resourceUrl = SERVER_API_URL + 'api/alipay-fund-auth-order-app-freeze-responses';

  constructor(protected http: HttpClient) {}

  create(alipayFundAuthOrderAppFreezeResponse: IAlipayFundAuthOrderAppFreezeResponseRs): Observable<EntityResponseType> {
    return this.http.post<IAlipayFundAuthOrderAppFreezeResponseRs>(this.resourceUrl, alipayFundAuthOrderAppFreezeResponse, {
      observe: 'response'
    });
  }

  update(alipayFundAuthOrderAppFreezeResponse: IAlipayFundAuthOrderAppFreezeResponseRs): Observable<EntityResponseType> {
    return this.http.put<IAlipayFundAuthOrderAppFreezeResponseRs>(this.resourceUrl, alipayFundAuthOrderAppFreezeResponse, {
      observe: 'response'
    });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAlipayFundAuthOrderAppFreezeResponseRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAlipayFundAuthOrderAppFreezeResponseRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
