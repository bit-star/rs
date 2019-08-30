import { IPcrRs } from 'app/shared/model/pcr-rs.model';
import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';

export interface IShippingAddressRs {
  id?: number;
  receiver?: string;
  moblie?: string;
  address?: string;
  pcr?: IPcrRs;
  alipayUser?: IAlipayUserRs;
}

export class ShippingAddressRs implements IShippingAddressRs {
  constructor(
    public id?: number,
    public receiver?: string,
    public moblie?: string,
    public address?: string,
    public pcr?: IPcrRs,
    public alipayUser?: IAlipayUserRs
  ) {}
}
