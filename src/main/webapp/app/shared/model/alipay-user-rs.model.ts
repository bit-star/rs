import { IOrderRs } from 'app/shared/model/order-rs.model';
import { IShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';

export interface IAlipayUserRs {
  id?: number;
  userId?: string;
  avatar?: string;
  nickName?: string;
  mobile?: string;
  gender?: string;
  countryCode?: string;
  province?: string;
  city?: string;
  accessToken?: string;
  alipayUserId?: string;
  authTokenType?: string;
  expiresIn?: string;
  reExpiresIn?: string;
  refreshToken?: string;
  orders?: IOrderRs[];
  shippingAddresses?: IShippingAddressRs[];
}

export class AlipayUserRs implements IAlipayUserRs {
  constructor(
    public id?: number,
    public userId?: string,
    public avatar?: string,
    public nickName?: string,
    public mobile?: string,
    public gender?: string,
    public countryCode?: string,
    public province?: string,
    public city?: string,
    public accessToken?: string,
    public alipayUserId?: string,
    public authTokenType?: string,
    public expiresIn?: string,
    public reExpiresIn?: string,
    public refreshToken?: string,
    public orders?: IOrderRs[],
    public shippingAddresses?: IShippingAddressRs[]
  ) {}
}
