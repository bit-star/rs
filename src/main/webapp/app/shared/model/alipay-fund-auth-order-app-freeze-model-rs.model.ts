export interface IAlipayFundAuthOrderAppFreezeModelRs {
  id?: number;
  orderTitle?: string;
  outOrderNo?: string;
  outRequestNo?: string;
  payeeUserId?: string;
  payeeLogonId?: string;
  productCode?: string;
  amount?: string;
  extraParam?: string;
  notifyUrl?: string;
}

export class AlipayFundAuthOrderAppFreezeModelRs implements IAlipayFundAuthOrderAppFreezeModelRs {
  constructor(
    public id?: number,
    public orderTitle?: string,
    public outOrderNo?: string,
    public outRequestNo?: string,
    public payeeUserId?: string,
    public payeeLogonId?: string,
    public productCode?: string,
    public amount?: string,
    public extraParam?: string,
    public notifyUrl?: string
  ) {}
}
