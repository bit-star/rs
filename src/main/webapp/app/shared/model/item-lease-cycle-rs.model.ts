import { Moment } from 'moment';
import { IOrderItemRs } from 'app/shared/model/order-item-rs.model';

export interface IItemLeaseCycleRs {
  id?: number;
  name?: string;
  startTime?: Moment;
  endTime?: Moment;
  inventory?: number;
  numberOfPeriods?: number;
  deposit?: number;
  creditExemption?: number;
  rentReceivedNumberOfPeriods?: number;
  debitedAmount?: number;
  nextBillDay?: Moment;
  orderItem?: IOrderItemRs;
}

export class ItemLeaseCycleRs implements IItemLeaseCycleRs {
  constructor(
    public id?: number,
    public name?: string,
    public startTime?: Moment,
    public endTime?: Moment,
    public inventory?: number,
    public numberOfPeriods?: number,
    public deposit?: number,
    public creditExemption?: number,
    public rentReceivedNumberOfPeriods?: number,
    public debitedAmount?: number,
    public nextBillDay?: Moment,
    public orderItem?: IOrderItemRs
  ) {}
}
