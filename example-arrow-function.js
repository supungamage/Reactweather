var names = ['Supun', 'Rangika', 'Nethum'];

names.forEach(function (name){
  console.log('forEach :' + name);
});

names.forEach((name) => {
  console.log('arrow :' + name);
});

names.forEach((name) => console.log('arrow 2 :' + name));

var retrunMe = function(name) {
  return name + '!';
}

var returnMeArrow = (name) => name + '!';

console.log(returnMeArrow('Supun'));

var person = {
  name: 'Supun',
  greet: function() {
    names.forEach(function (name){
      console.log(this.name + ' say Hi to ' + name);
    });
  },
  greetArrow: function() {
    names.forEach((name) => console.log(this.name + ' say Hi to ' + name));
  }
}

person.greet();
person.greetArrow();

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(5, 6));
console.log(addStatement(5, 6));
console.log(addExpression(5, 6));
