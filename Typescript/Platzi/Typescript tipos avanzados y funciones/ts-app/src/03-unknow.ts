let anyVar: any;
anyVar = true;
anyVar = 'true';
anyVar = 454;
anyVar = [];
anyVar = {};

const isNew: boolean = anyVar;
anyVar.doSomething();
anyVar.touppercase();

//? unknown es igual que any pero con mas verificiones y es recomendado por typescript

let unknownVar: unknown;
anyVar = true;
anyVar = 'true';
anyVar = 454;
anyVar = [];
anyVar = {};

// unknownVar.doSomething();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}
if (typeof unknownVar === 'boolean') {
  let isNew2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
