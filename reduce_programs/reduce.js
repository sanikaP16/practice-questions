const getSumOfNumbers = (sum, number) => sum + number;

const sumOf = function (numbers) {
  return numbers.reduce(getSumOfNumbers, 0);
};

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((product, number) => product * number, 1);
};

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  const sumOfNumbers = numbers.reduce(getSumOfNumbers, 0);
  return sumOfNumbers / numbers.length;
}

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const getMin = (smallestNum, number) => number < smallestNum ?
  number : smallestNum;

const minOf = function (numbers) {
  return numbers.reduce(getMin, Infinity);
}

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const getMax = (largestValue, currentValue) =>
  largestValue > currentValue ? largestValue : currentValue;

const maxOf = function (numbers) {
  return numbers.reduce(getMax, -Infinity);
}

// sumPositiveNumbers([1, -2, 3, -4]) => 4

const sumPositiveNumbers = function (numbers) {
  return numbers.filter((element) => element > 0)
    .reduce(getSumOfNumbers, 0);
}

// sumOfSquares([1, 2, 3, 4]) => 30
const getSquare = (element) => element * element;

const sumOfSquares = function (numbers) {
  return numbers.map(getSquare).reduce(getSumOfNumbers, 0)
}

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isEven = (element) => element % 2 === 0;

const invert = function (f) {
  return function (...args) {
    return !f(...args)
  }
}

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(invert(isEven)).reduce(getSumOfNumbers, 0);
}

//need to use reduce.
// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.filter(invert(getPositiveNumbers)).length;
}

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(getSquare).reduce(getSumOfNumbers, 0);
}

// concatenateWords(["hello", "world"]) => "helloworld"
const joinWords = function (char) {
  return (accumalator, word) => accumalator.concat(char, word);
};

const concatenateWords = function (words) {
  return words.reduce(joinWords(""), "");
}

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const getLongestWord = function (accumalator, word) {
  return accumalator.length < word.length ? word : accumalator;
}

const longestWord = function (words) {
  return words.reduce(getLongestWord, "");
}

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const getShortesWord = (accumulator, word) =>
  word.length < accumulator.length ? word : accumulator;


const shortestWord = function (words) {
  return words.reduce(getShortesWord);
}

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"

const joinWithComma = function (words) {
  return words.reduce(joinWords(","));
};

// reverseWords(["hello", "world"]) => "world hello" 

const reverseWords = function (words) {
  return words.reduce((accumalator, word) => word.concat(" ", accumalator));
}

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((accumalator, word) => accumalator.concat(" ", word));
}

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce(joinWords(""));
}

// countVowelsInWords(["hello", "world"]) => "eoo"
const getVowels = function (accumalator, char) {
  return 'aeiou'.includes(char.toLowerCase()) ?
    accumalator + char : accumalator;
}

const countVowelsInWords = function (words) {
  return [...words.join("")].reduce(getVowels, "");
}

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
  return words.reduce((accumalator, word) =>
    accumalator.concat(word[0].toUpperCase(), word.slice(1)));
}

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const getReversedWord = (accumalator, word) =>
  accumalator.concat(word.split("").reverse());

const reverseString = function (words) {
  return words.reduce(getReversedWord, "");
}

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) { }

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]

const getArray = (accumalator, listOfElement) =>
  [...accumalator, ...listOfElement];

const concatenateArrays = function (arrays) {
  return arrays.reduce(getArray);
}

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]

const flattenArray = function (arrays) {
  return arrays.reduce(getArray);
}

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const getUniqueNumbers = (uniqueArray, element) => {
  if (!uniqueArray.includes(element)) {
    uniqueArray.push(element);
  }

  return uniqueArray;
}

const uniqueNumbers = function (numbers) {
  return numbers.reduce(getUniqueNumbers, []);
}
