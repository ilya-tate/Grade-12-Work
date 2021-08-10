const findGridNumber = string => {
  string = string.split('');
  let [front, back, right, left] = [127, 0, 7, 0];

  for (char of string) {
    switch (char) {
      case 'F':
        front = Math.floor((front + back) / 2); 
        break;
      case 'B':
        back = Math.ceil((front + back) / 2);
        break;
      case 'R':
        left = Math.ceil((right + left) / 2);
        break;
      case 'L':
        right = Math.floor((right + left) / 2);
        break;
    }
  }

  return Math.ceil(back * 8 + left);
}

const questionOne = () => {
  let [lowest, highest] = [Infinity, 0];

  input.forEach(grid => {
    let gridNumber = findGridNumber(grid);
    if (gridNumber < lowest) {
      lowest = gridNumber;
    } else if (gridNumber > highest) {
      highest = gridNumber;
    }
  });

  return (`${lowest}, ${highest}`)
}

const questionTwo = () => {
  let [lowest, highest] = [questionOne().split(', ')[0], questionOne().split(', ')[1]]
  let gridNumbers = [];

  input.forEach(grid => {
    gridNumbers.push(findGridNumber(grid));
  });


  for (i = +lowest; i <= +highest; i++) {
    if (!gridNumbers.some(val => val === i)) {
      return i;
    }
  }
}

const questionThree = num => {
  let [front, back, right, left] = [127, 0, 7, 0];
  let col = num % 8;
  let row = (num - col) / 8;
  let newString = '';

  for (i = 0; i <= 7; i++) {
    if (row < (front + back) / 2) {
      newString += 'F';
      front = Math.floor((front + back) / 2);
    } else if (row > (front + back) / 2) {
      newString += 'B';
      back = Math.ceil((front + back) / 2);
    }
  }

  for (i = 0; i <= 3; i++) {
    if (col < (right + left) / 2) {
      newString += 'L';
        right = Math.floor((right + left) / 2)
    } else if (col > (right + left) / 2) {
      newString += 'R';
      left = Math.ceil((right + left) / 2)
    }
  }

  return newString;
}

const questionFour = (col, row) => {
  let sumCol = col.reduce((total, current) => {
    return total + current;
  });

  let sumRow = row.reduce((total, current) => {
    return total + current;
  });

  return String((sumCol + sumRow)).split('0').join('');
}
