(() => {
  let myDynamicVar: any;

  myDynamicVar = 100;
  myDynamicVar = 'Jose';
  myDynamicVar = false;
  myDynamicVar = null;

  let rta = myDynamicVar as string;
  console.log(rta);

  myDynamicVar = 123;
  let rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
