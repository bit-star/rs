import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAlipayFundAuthOrderAppFreezeModelRs } from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';

type EntityResponseType = HttpResponse<IAlipayFundAuthOrderAppFreezeModelRs>;
type EntityArrayResponseType = HttpResponse<IAlipayFundAuthOrderAppFreezeModelRs[]>;

@Injectable({ providedIn: 'root' })
export class AlipayFundAuthOrderAppFreezeModelRsService {
  public resourceUrl = SERVER_API_URL + 'api/alipay-fund-auth-order-app-freeze-models';

  constructor(protected http: HttpClient) {}

  create(alipayFundAuthOrderAppFreezeModel: IAlipayFundAuthOrderAppFreezeModelRs): Observable<EntityResponseType> {
    return this.http.post<IAlipayFundAuthOrderAppFreezeModelRs>(this.resourceUrl, alipayFundAuthOrderAppFreezeModel, {
      observe: 'response'
    });
  }

  update(alipayFundAuthOrderAppFreezeModel: IAlipayFundAuthOrderAppFreezeModelRs): Observable<EntityResponseType> {
    return this.http.put<IAlipayFundAuthOrderAppFreezeModelRs>(this.resourceUrl, alipayFundAuthOrderAppFreezeModel, {
      observe: 'response'
    });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAlipayFundAuthOrderAppFreezeModelRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAlipayFundAuthOrderAppFreezeModelRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
