export interface Product {
  _id?: string | number;
  name: string;
  otherNames: string[];
  type: string;
  category: string[];
  image: string;
  prices: Array<PricePerUnit>;
}

export interface PricePerUnit {
  id: number;
  value: number;
  label: string;
}
