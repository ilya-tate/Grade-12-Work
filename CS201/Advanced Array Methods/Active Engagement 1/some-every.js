const possiblePets = ['lizard', 'fish', 'bird', 'hamster'];

for (pet of possiblePets) {
  if (!people.some(person => person.pet === pet)) {
    console.log(pet);
    break;
  }
}

console.log(
  people.every(person => person.age >= 10 && person.age <= 25),
  people.every(person => person.age >= 15 && person.age <= 30),
  people.every(person => person.age >= 20 && person.age <= 35)
);
