(() => {
  type Sizes = 'M' | 'L' | 'XL' | 'S';
  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  };
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({ title: 'Camisa', createAt: new Date(), stock: 300 });
  addProduct({
    title: 'Camisa1',
    createAt: new Date(),
    stock: 300,
    size: 'L',
  });

  products.push({ title: 'Pro3', createAt: new Date(), stock: 233, size: 'M' });
  console.log(products);
})();
