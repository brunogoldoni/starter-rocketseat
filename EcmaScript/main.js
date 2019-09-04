// REST
// const user = {
//   name: 'Bruno',
//   age: 31,
//   Company: 'Orion'
// };
// const { name, age, ...rest } = user;

// console.log(name);
// console.log(rest);

// Desestruturação
// const arr = [1,2,3,4,5,6,7,8,9];

// const [ a, b, c, ...d ] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Parametros de Funções
// function sum(a, b, c) {
//   return a + b - c;
// }

// console.log(sum(13, 7, 3));

// REST
function sum(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(sum(1, 5, 9));

// SPREAD
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);

const user1 = {
  name: 'Bruno',
  age: 31,
  company: 'Orion'
};

const user2 = { ...user1, name: 'Rodolfo' };
console.log(user2);