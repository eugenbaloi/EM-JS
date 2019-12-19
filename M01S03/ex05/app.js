var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 30,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [{
    name:'Larry',
    surname:'Larryson',
    age: 31
  }, {
    name:'Carol',
    surname: 'Carolson',
    age: 29
  },
  {
    name:'Steven',
    surname: 'Stevenson',
    age: 25
  }]
};

console.log(
  ' Ma numesc ' + person.name + ' ' + person.surname +
  ' si stiu ' + person.skills[0] + ' si ' + person.skills[2] +'.'
);

console.log(`Sunt ${person.friends} sia cum invat JavaScript`);
console.log(`Am ${person.friends.length} prieteni: ${person.friends[0].name}, ${person.friends[1].name} si ${person.friends[2].name}.`);


console.log(`Numele meu este ${person.name} ${person.surname} si vreau sa invat JavaScript`);


“Sunt xxx si stiu HTML si CSS.”


console.log(
  ' Numele meu este ' + person.name + ' ' + person.surname + 
  ' si stiu ' + person.skills[0] + ' si ' + person.skills[2]+ '.' 
  );

