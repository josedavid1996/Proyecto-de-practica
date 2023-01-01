(() => {
  type Sizes = 'M' | 'L' | 'XL' | 'S';
  function createProductJSON(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size,
    };
  }
  createProductJSON('Camisa', new Date(), 300, 'L');

  const createProductJSONV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    };
  };

  createProductJSONV2('Pc', new Date(), 200);
})();
