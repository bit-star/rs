import { IItemLeaseCycleRs } from 'app/shared/model/item-lease-cycle-rs.model';
import { ICommodityRs } from 'app/shared/model/commodity-rs.model';
import { IOrderRs } from 'app/shared/model/order-rs.model';

export const enum RightsProtectionStatus {
  Normal = 'Normal',
  Objection = 'Objection'
}

export interface IOrderItemRs {
  id?: number;
  unitPrice?: number;
  actuallyPaid?: number;
  rightsProtectionStatus?: RightsProtectionStatus;
  itemLeaseCycles?: IItemLeaseCycleRs[];
  commodity?: ICommodityRs;
  order?: IOrderRs;
}

export class OrderItemRs implements IOrderItemRs {
  constructor(
    public id?: number,
    public unitPrice?: number,
    public actuallyPaid?: number,
    public rightsProtectionStatus?: RightsProtectionStatus,
    public itemLeaseCycles?: IItemLeaseCycleRs[],
    public commodity?: ICommodityRs,
    public order?: IOrderRs
  ) {}
}
