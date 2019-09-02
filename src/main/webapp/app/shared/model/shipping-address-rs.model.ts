import { IAlipayUserRs } from 'app/shared/model/alipay-user-rs.model';

export interface IShippingAddressRs {
  id?: number;
  receiver?: string;
  moblie?: string;
  province?: string;
  city?: string;
  region?: string;
  address?: string;
  alipayUser?: IAlipayUserRs;
}

export class ShippingAddressRs implements IShippingAddressRs {
  constructor(
    public id?: number,
    public receiver?: string,
    public moblie?: string,
    public province?: string,
    public city?: string,
    public region?: string,
    public address?: string,
    public alipayUser?: IAlipayUserRs
  ) {}
}
