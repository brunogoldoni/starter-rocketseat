const user = {
  name: 'Bruno',
  age: 31,
  address: {
    city: 'Rio de Janeiro',
    state: 'RJ'
  },
};

function showName({ name, age, address: { city } }) {
  console.log(name, age, city);
}
showName(user);