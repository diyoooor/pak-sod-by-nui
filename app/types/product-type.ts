export interface Product {
  id: number;
  name: string;
  otherNames: string[];
  category: string[];
  image: string;
  prices: Array<PricePerUnit>;
}

export interface PricePerUnit {
  id: number;
  value: number;
  label: string;
}
