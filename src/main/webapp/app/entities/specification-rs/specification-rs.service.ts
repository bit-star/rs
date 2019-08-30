import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ISpecificationRs } from 'app/shared/model/specification-rs.model';

type EntityResponseType = HttpResponse<ISpecificationRs>;
type EntityArrayResponseType = HttpResponse<ISpecificationRs[]>;

@Injectable({ providedIn: 'root' })
export class SpecificationRsService {
  public resourceUrl = SERVER_API_URL + 'api/specifications';

  constructor(protected http: HttpClient) {}

  create(specification: ISpecificationRs): Observable<EntityResponseType> {
    return this.http.post<ISpecificationRs>(this.resourceUrl, specification, { observe: 'response' });
  }

  update(specification: ISpecificationRs): Observable<EntityResponseType> {
    return this.http.put<ISpecificationRs>(this.resourceUrl, specification, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISpecificationRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISpecificationRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
