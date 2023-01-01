(() => {
  let productPrice = 100;
  console.log(productPrice);

  let customerAge: number = 28;

  customerAge = customerAge + 1;

  console.log('customerAge', customerAge);

  let productInStock: number = 5;

  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('Apply');
  } else {
    console.log('Not Apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b0101;
  console.log('bin', bin);
})();
