import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';

type EntityResponseType = HttpResponse<IShippingAddressRs>;
type EntityArrayResponseType = HttpResponse<IShippingAddressRs[]>;

@Injectable({ providedIn: 'root' })
export class ShippingAddressRsService {
  public resourceUrl = SERVER_API_URL + 'api/shipping-addresses';

  constructor(protected http: HttpClient) {}

  create(shippingAddress: IShippingAddressRs): Observable<EntityResponseType> {
    return this.http.post<IShippingAddressRs>(this.resourceUrl, shippingAddress, { observe: 'response' });
  }

  update(shippingAddress: IShippingAddressRs): Observable<EntityResponseType> {
    return this.http.put<IShippingAddressRs>(this.resourceUrl, shippingAddress, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IShippingAddressRs>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IShippingAddressRs[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
