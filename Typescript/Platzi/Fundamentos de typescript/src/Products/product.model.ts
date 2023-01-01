export type Sizes = 'M' | 'L' | 'XL' | 'S';
export type Product = {
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
};
