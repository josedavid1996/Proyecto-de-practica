(() => {
  // let myNumber: number = 123;
  // let myString: string = 'sdf';

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;

  let myString: undefined | string = undefined;

  myString = 'sdkfsd';

  function hi(name: string | null) {
    let hello = 'Hola';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  //? Practicar
  function hiV2(name: string | null) {
    let hello = 'Hola';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('Jose');
  hi(null);

  hiV2('Jose');
  hiV2(null);
})();
