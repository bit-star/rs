import { ICommodityRs } from 'app/shared/model/commodity-rs.model';

export interface ICategoryRs {
  id?: number;
  name?: string;
  order?: number;
  commodities?: ICommodityRs[];
}

export class CategoryRs implements ICategoryRs {
  constructor(public id?: number, public name?: string, public order?: number, public commodities?: ICommodityRs[]) {}
}
