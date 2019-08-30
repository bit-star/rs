import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';

type EntityResponseType = HttpResponse<IAlipayUserRs>;
type EntityArrayResponseType = HttpResponse<IAlipayUserRs[]>;

@Injectable({ providedIn: 'root' })
export class AlipayUserRsService {
  public resourceUrl = SERVER_API_URL + 'api/alipay-users';

  constructor(protected http: HttpClient) {}

  create(alipayUser: IAlipayUserRs): Observable<EntityResponseType> {
    return this.http.post<IAlipayUserRs>(this.resourceUrl, alipayUser, { observe: 'response' });
  }

  update(alipayUser: IAlipayUserRs): Observable<EntityResponseType> {
    return this.http.put<IAlipayUserRs>(this.resourceUrl, alipayUser, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAlipayUserRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAlipayUserRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
