(() => {
  type Sizes = 'M' | 'L' | 'XL' | 'S';
  interface Props {
    email: string;
    password: string;
  }

  //?Practicar con los parametro de react los tipados

  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'Jodarepe@gmail.com',
    password: '123345',
  });

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };
  addProduct({ title: 'Camisa', createAt: new Date(), stock: 300 });
  addProduct({ title: 'Camisa1', createAt: new Date(), stock: 300, size: 'L' });
  console.log(products);
})();
