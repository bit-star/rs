export interface IAlipayFundAuthOrderAppFreezeResponseRs {
  id?: number;
  amount?: string;
  authNo?: string;
  creditAmount?: string;
  fundAmount?: string;
  gmtTrans?: string;
  operationId?: string;
  outOrderNo?: string;
  outRequestNo?: string;
  payerUserId?: string;
  preAuthType?: string;
  status?: string;
}

export class AlipayFundAuthOrderAppFreezeResponseRs implements IAlipayFundAuthOrderAppFreezeResponseRs {
  constructor(
    public id?: number,
    public amount?: string,
    public authNo?: string,
    public creditAmount?: string,
    public fundAmount?: string,
    public gmtTrans?: string,
    public operationId?: string,
    public outOrderNo?: string,
    public outRequestNo?: string,
    public payerUserId?: string,
    public preAuthType?: string,
    public status?: string
  ) {}
}
