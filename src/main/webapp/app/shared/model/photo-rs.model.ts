import { ICommodityRs } from 'app/shared/model/commodity-rs.model';

export interface IPhotoRs {
  id?: number;
  originalImage?: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  commodity?: ICommodityRs;
}

export class PhotoRs implements IPhotoRs {
  constructor(
    public id?: number,
    public originalImage?: string,
    public thumbnail?: string,
    public width?: number,
    public height?: number,
    public commodity?: ICommodityRs
  ) {}
}
