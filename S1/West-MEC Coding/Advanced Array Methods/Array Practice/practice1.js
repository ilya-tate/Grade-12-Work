const drinks = [
  'Soda',
  'Coffee',
  'Lemonade',
  'Iced tea',
  'Juice',
  'Milkshake',
  'Water',
  'Milk',
  'Beer',
  'Martini',
  'Margarita',
  'Wine',
  'Daiquari',
];

let mDrinks = drinks.filter(drink => drink.startsWith('M'))
console.log(mDrinks);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const colors = ['red', 'black', 'white', 'blue', 'purple', 'orange', 'green', 'yellow'];

let newArray = colors.map((color, i) => {
  return { color, index: i }; 
});
console.log(newArray);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


let pets = [
  'snake', 
  'dog',
  'cat',
  'fish',
  'lizard',
  'bird',
  'rabbit',
];

pets = pets.map(pet => {
  return pet[0].toUpperCase() + pet.slice(1);
});
console.log(pets);
