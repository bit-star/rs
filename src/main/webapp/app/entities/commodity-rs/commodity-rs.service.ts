import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICommodityRs } from 'app/shared/model/commodity-rs.model';

type EntityResponseType = HttpResponse<ICommodityRs>;
type EntityArrayResponseType = HttpResponse<ICommodityRs[]>;

@Injectable({ providedIn: 'root' })
export class CommodityRsService {
  public resourceUrl = SERVER_API_URL + 'api/commodities';

  constructor(protected http: HttpClient) {}

  create(commodity: ICommodityRs): Observable<EntityResponseType> {
    return this.http.post<ICommodityRs>(this.resourceUrl, commodity, { observe: 'response' });
  }

  update(commodity: ICommodityRs): Observable<EntityResponseType> {
    return this.http.put<ICommodityRs>(this.resourceUrl, commodity, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICommodityRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICommodityRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
