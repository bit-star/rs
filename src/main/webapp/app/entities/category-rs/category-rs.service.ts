import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ICategoryRs } from 'app/shared/model/category-rs.model';

type EntityResponseType = HttpResponse<ICategoryRs>;
type EntityArrayResponseType = HttpResponse<ICategoryRs[]>;

@Injectable({ providedIn: 'root' })
export class CategoryRsService {
  public resourceUrl = SERVER_API_URL + 'api/categories';

  constructor(protected http: HttpClient) {}

  create(category: ICategoryRs): Observable<EntityResponseType> {
    return this.http.post<ICategoryRs>(this.resourceUrl, category, { observe: 'response' });
  }

  update(category: ICategoryRs): Observable<EntityResponseType> {
    return this.http.put<ICategoryRs>(this.resourceUrl, category, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICategoryRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICategoryRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
