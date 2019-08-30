import { IShippingAddressRs } from 'app/shared/model/shipping-address-rs.model';

export interface IPcrRs {
  id?: number;
  name?: string;
  parentId?: number;
  alias?: string;
  level?: number;
  phoneAreaCode?: string;
  zip?: number;
  pinyin?: string;
  shippingAddresses?: IShippingAddressRs[];
}

export class PcrRs implements IPcrRs {
  constructor(
    public id?: number,
    public name?: string,
    public parentId?: number,
    public alias?: string,
    public level?: number,
    public phoneAreaCode?: string,
    public zip?: number,
    public pinyin?: string,
    public shippingAddresses?: IShippingAddressRs[]
  ) {}
}
