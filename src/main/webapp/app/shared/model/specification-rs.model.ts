import { ICommodityRs } from 'app/shared/model/commodity-rs.model';

export interface ISpecificationRs {
  id?: number;
  name?: string;
  value?: string;
  commodity?: ICommodityRs;
}

export class SpecificationRs implements ISpecificationRs {
  constructor(public id?: number, public name?: string, public value?: string, public commodity?: ICommodityRs) {}
}
