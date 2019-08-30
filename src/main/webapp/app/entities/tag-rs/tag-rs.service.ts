import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITagRs } from 'app/shared/model/tag-rs.model';

type EntityResponseType = HttpResponse<ITagRs>;
type EntityArrayResponseType = HttpResponse<ITagRs[]>;

@Injectable({ providedIn: 'root' })
export class TagRsService {
  public resourceUrl = SERVER_API_URL + 'api/tags';

  constructor(protected http: HttpClient) {}

  create(tag: ITagRs): Observable<EntityResponseType> {
    return this.http.post<ITagRs>(this.resourceUrl, tag, { observe: 'response' });
  }

  update(tag: ITagRs): Observable<EntityResponseType> {
    return this.http.put<ITagRs>(this.resourceUrl, tag, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITagRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITagRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
