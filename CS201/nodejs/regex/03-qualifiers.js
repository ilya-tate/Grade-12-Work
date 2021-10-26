// Phone numbers
const phoneNumbers = [
  "(123) 123 1234",
  "123-123-1234",
  "1231231234",
  "(123)123-1234"
];
const reValidNumber = /^\(?[0-9]{3}[\)-]? ?[0-9]{3}[ -]?[0-9]{4}$/g;
for (phoneNumber of phoneNumbers) {
  // console.log(phoneNumber.match(reValidNumber));
}

// Checking if a number is between 0 and 100
const str = "3";
const re = /^[1-9][0-9]$|^[0-9]$|^100$/g;
// console.log(str.match(re));

// Check starts with 3 letters not case-sensitive,
// any 1 optional special character,
// ends in 1 or more even numbers

const password = "aaa!22";
const reValidPassword = /^[a-zA-z]{3}[\W\S]?[02468]+$/g;
console.log(password.match(reValidNumber));
