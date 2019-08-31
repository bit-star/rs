import { IPhotoRs } from 'app/shared/model/photo-rs.model';
import { ISpecificationRs } from 'app/shared/model/specification-rs.model';
import { ITagRs } from 'app/shared/model/tag-rs.model';
import { ICategoryRs } from 'app/shared/model/category-rs.model';
import { IOrderItemRs } from 'app/shared/model/order-item-rs.model';

export const enum DeliveryMethod {
  ExpressDelivery = 'ExpressDelivery',
  PickUp = 'PickUp'
}

export const enum CommodityStatus {
  OnLine = 'OnLine',
  OffLine = 'OffLine'
}

export interface ICommodityRs {
  id?: number;
  name?: string;
  remark?: string;
  dayRent?: number;
  weeklyRent?: number;
  monthlyRent?: number;
  deposit?: number;
  rentalMethod?: string;
  maxRent?: number;
  inventory?: number;
  deliveryMethod?: DeliveryMethod;
  status?: CommodityStatus;
  leaseMustRead?: string;
  desciption?: string;
  photos?: IPhotoRs[];
  specifications?: ISpecificationRs[];
  tags?: ITagRs[];
  category?: ICategoryRs;
  orderItems?: IOrderItemRs[];
}

export class CommodityRs implements ICommodityRs {
  constructor(
    public id?: number,
    public name?: string,
    public remark?: string,
    public dayRent?: number,
    public weeklyRent?: number,
    public monthlyRent?: number,
    public deposit?: number,
    public rentalMethod?: string,
    public maxRent?: number,
    public inventory?: number,
    public deliveryMethod?: DeliveryMethod,
    public status?: CommodityStatus,
    public leaseMustRead?: string,
    public desciption?: string,
    public photos?: IPhotoRs[],
    public specifications?: ISpecificationRs[],
    public tags?: ITagRs[],
    public category?: ICategoryRs,
    public orderItems?: IOrderItemRs[]
  ) {}
}
