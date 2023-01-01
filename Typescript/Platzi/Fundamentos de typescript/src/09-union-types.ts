(() => {
  let userId: string | number;

  function greeting(myText: string | number): void {
    if (typeof myText === 'string') {
      console.log(myText.toLocaleUpperCase());
    } else {
      console.log(myText.toFixed(1));
    }
  }

  greeting('Jose david');
  greeting(12.343345345);
})();
