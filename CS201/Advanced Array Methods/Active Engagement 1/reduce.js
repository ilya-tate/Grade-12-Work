console.log(
  people.reduce((sum, person) => {
    return sum + person.age;
  }, 0) / 1000
);
