(() => {
  let productTitle = 'My amazing Product';
  productTitle = 'My amazing Product change';
  let productoDescription = 'My awesome Product';
  let productPrice = 100;
  let isNew: boolean = false;
  let sumary = `
  title: ${productTitle}
  description: ${productoDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;

  console.log(sumary);
})();
