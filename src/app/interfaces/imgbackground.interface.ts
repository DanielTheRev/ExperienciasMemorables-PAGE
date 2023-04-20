export interface ImgBgData {
  data: ImgBG[];
  isEmpty: boolean;
}

export interface ImgBG {
  _id?: string;
  src: ImgCL;
}
export interface ImgCL {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  api_key: string;
}
