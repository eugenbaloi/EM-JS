var friends =[{
name:  'Dragos',
surname: 'Iordache'
},{
  name:  'Larry',
  surname: 'Larryson'
},{
  name:  'Steven',
  surname: 'Stevenson'
},{
  name:  'Carol',
  surname: 'Carolson'
},{
  name:  'Andra',
  surname: 'Andrason'
}];

for (let i = 0; i < friends.length; i++) {
console.log(friends[i].surname);
}

for (let i = 0; i < friends.length; i++) {
console.log(`${friends[i].name} ${friends[i].surname}`);
if (friends[i].name === "Steven");
break;
  }


for (let i = 0; i < friends.length; i++) {
let fullName = friends[i].name + friends[i].surname;
if (fullName.length <= 13) {
continue;
  }
console.log(fullName.length, `${friends[i].name} ${friends[i].surname}`);
 }



 console.warn('Afiseaza numele boss');
  for (let i = o; i < friends.name; i++) {
  console.log(friends[i].name);
   }
  