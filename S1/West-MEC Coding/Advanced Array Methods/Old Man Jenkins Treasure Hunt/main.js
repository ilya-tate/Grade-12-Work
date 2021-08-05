let squareMax, squareMin;

const findNumber = string => {
  string = string.split('');
  let [front, back, right, left, mdpt] = [127, 0, 7, 0, 64];

  const findMdpt = side => {
    switch (side) {
      case front:
        break;
      case back:
        break;
    }
  }

  for (char of string) {
    switch (string) {
      case 'F':
        front = mdpt;
        mdpt = findMdpt(front);
        break;
      case 'B':
        back = mdpt;
        mdpt = findMdpt(back);
        break;
      case 'R':
        break;
      case 'L':
        break;
      default:
        return mdpt;
    }
  }
}

console.log(findNumber('FBFFBF'));
