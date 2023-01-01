import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Prod5',
  createAt: new Date(),
  stock: 5,
  size: 'L',
});
addProduct({
  title: 'Prod3',
  createAt: new Date(),
  stock: 20,
  size: 'L',
});
const total = calcStock();
console.log(products);
console.log(total);
