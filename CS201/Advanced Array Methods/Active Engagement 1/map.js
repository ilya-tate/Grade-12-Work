const alcoholicDrinks = ['Daiquari', 'Martini', 'Wine', 'Margarita', 'Beer'];

let newPeople = people.map(person => {
  const { age, drink } = person;
  let isEjected;
  age < 21 && alcoholicDrinks.includes(drink) ? isEjected = true : isEjected = false;
  return { ...person, ejected: isEjected };
});

console.log(newPeople);
