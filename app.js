const capitalizeFirst = (string) => {
  const letters = [...string];
  letters[0].toUpperCase();
  return letters.join('');
};

const reverseString = (string) => {
  return [...string].reverse().join('');
};

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

const caesarCipher = (string, shift = 0) => {
  string = string.toLowerCase();
  let stringArray = [...string];
  const alphabet = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  const letterToNumber = (letter) => {
    return alphabet[letter];
  };

  const numberToLetter = (number, obj = alphabet) => {
    return Object.keys(obj).find((key) => obj[key] === number);
  };

  const toEncrypted = (shift) => {
    stringArray = stringArray.map((x) => letterToNumber(x));

    const newValues = stringArray.map((x) => x + shift);

    return newValues.map((x) => numberToLetter(x)).join('');
  };

  return toEncrypted(shift);
};

const analyzeArray = (array) => {
  const average = () => {
    let sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
  };

  const min = () => Math.min(...array);
  const max = () => Math.max(...array);
  const howLong = () => array.length;
  return { average, min, max, howLong };
};

caesarCipher('helloWORLD');

export {
  capitalizeFirst,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
