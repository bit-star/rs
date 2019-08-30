import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IPhotoRs } from 'app/shared/model/photo-rs.model';

type EntityResponseType = HttpResponse<IPhotoRs>;
type EntityArrayResponseType = HttpResponse<IPhotoRs[]>;

@Injectable({ providedIn: 'root' })
export class PhotoRsService {
  public resourceUrl = SERVER_API_URL + 'api/photos';

  constructor(protected http: HttpClient) {}

  create(photo: IPhotoRs): Observable<EntityResponseType> {
    return this.http.post<IPhotoRs>(this.resourceUrl, photo, { observe: 'response' });
  }

  update(photo: IPhotoRs): Observable<EntityResponseType> {
    return this.http.put<IPhotoRs>(this.resourceUrl, photo, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPhotoRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPhotoRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
