import { IOrderItemRs } from 'app/shared/model/order-item-rs.model';
import { IUser } from 'app/core/user/user.model';

export const enum OrderStatus {
  PendingPayment = 'PendingPayment',
  PendingConfirming = 'PendingConfirming',
  Stocking = 'Stocking',
  Shipped = 'Shipped',
  Arrived = 'Arrived',
  ToBeReturned = 'ToBeReturned',
  Returning = 'Returning',
  Completed = 'Completed',
  BeExpired = 'BeExpired',
  HasBoughtOut = 'HasBoughtOut',
  Closed = 'Closed'
}

export interface IOrderRs {
  id?: number;
  orderNo?: string;
  status?: OrderStatus;
  receiver?: string;
  mobile?: string;
  province?: string;
  city?: string;
  region?: string;
  address?: string;
  storeName?: string;
  logisticsCompany?: string;
  shipmentNumber?: string;
  paymentMethod?: string;
  freight?: number;
  description?: string;
  processingOpinions?: string;
  orderItems?: IOrderItemRs[];
  user?: IUser;
}

export class OrderRs implements IOrderRs {
  constructor(
    public id?: number,
    public orderNo?: string,
    public status?: OrderStatus,
    public receiver?: string,
    public mobile?: string,
    public province?: string,
    public city?: string,
    public region?: string,
    public address?: string,
    public storeName?: string,
    public logisticsCompany?: string,
    public shipmentNumber?: string,
    public paymentMethod?: string,
    public freight?: number,
    public description?: string,
    public processingOpinions?: string,
    public orderItems?: IOrderItemRs[],
    public user?: IUser
  ) {}
}
