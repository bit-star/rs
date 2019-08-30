import { ICommodityRs } from 'app/shared/model/commodity-rs.model';

export interface ITagRs {
  id?: number;
  name?: string;
  icon?: string;
  remark?: string;
  commodity?: ICommodityRs;
}

export class TagRs implements ITagRs {
  constructor(public id?: number, public name?: string, public icon?: string, public remark?: string, public commodity?: ICommodityRs) {}
}
