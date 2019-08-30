import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IPcrRs } from 'app/shared/model/pcr-rs.model';

type EntityResponseType = HttpResponse<IPcrRs>;
type EntityArrayResponseType = HttpResponse<IPcrRs[]>;

@Injectable({ providedIn: 'root' })
export class PcrRsService {
  public resourceUrl = SERVER_API_URL + 'api/pcrs';

  constructor(protected http: HttpClient) {}

  create(pcr: IPcrRs): Observable<EntityResponseType> {
    return this.http.post<IPcrRs>(this.resourceUrl, pcr, { observe: 'response' });
  }

  update(pcr: IPcrRs): Observable<EntityResponseType> {
    return this.http.put<IPcrRs>(this.resourceUrl, pcr, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPcrRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPcrRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
