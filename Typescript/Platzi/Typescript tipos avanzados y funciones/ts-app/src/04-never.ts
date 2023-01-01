// Practicar
//?Never es una funciona que nunca va a terminar o por algun caso se termina la ejecucion por ejemplo con thow

const withoutEnd = () => {
  while (true) {
    console.log('Nunca paara de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown): never | string => {
  if (typeof input === 'string') {
    return 'Soy un string';
  } else if (Array.isArray(input)) {
    return 'Soy un array';
  }
  return fail('Not match');
};

console.log(example('fsd'));
console.log(example([]));
console.log(example(435345));
console.log(example('Despues del fail'));
