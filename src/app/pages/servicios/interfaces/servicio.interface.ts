import { ImgCL } from '../../../interfaces/imgbackground.interface';

export interface ServiceData {
  isEmpty: boolean;
  data: Service[];
}

export interface Service {
  _id?: string;
  name: string;
  icon: ImgCL;
  images: ImgCL[];
}
