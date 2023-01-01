const prices: (number | string)[] = [1, 2, 3, 4, 5];
prices.push('kksdf');

//? Las tuplas sirven para tipar los valores que tiene un array y tambien controlar la cantidad de datos que se pueden incluir .Cada dato que tiene un array tiene que ser tipado

let user: [string, number?, boolean?] = ['Jose', 22];

user[1] = 23;

// user = [];
user = ['gdfg'];
user = ['gdfg', 234];
user = ['gdfg', 234, true];
const [_, numero, boleands] = user;

console.log(_);
