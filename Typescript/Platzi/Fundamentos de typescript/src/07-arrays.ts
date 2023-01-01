(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'hola', true];

  // prices.push(2);
  // prices.push("2");
  // prices.push(false);

  let products = ['hola', true];
  products.push(false);

  let mixed: (string | number | boolean | Object)[] = ['hola', false];
  mixed.push(2);
  mixed.push('2');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.map((item) => item * 2);
})();
