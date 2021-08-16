const neededDrinks = new Object

people.forEach(person => {
  const { drink } = person;
  neededDrinks[drink] ? neededDrinks[drink]++ : neededDrinks[drink] = 1;
});

console.log(neededDrinks);
