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
const getPositiveNumbers = (element) => element > 0;

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(getPositiveNumbers)
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

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) { }

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) { }

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) { }

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) { }

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) { }

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) { }

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) { }
// const getColumn = function (array, column) {
//   return array.reduce(function (columnArray, element) {
//     columnArray.push(element[column]);

//     return columnArray;
//   }, []);
// };

// const mergeArrays = function (arr1, arr2) {
//   const mergedArray = [...arr1, ...arr2];

//   return zip(getColumn(mergedArray, 0), getColumn(mergedArray, 1));
// };
// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { }

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { }

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) { }

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { }

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { }

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { }

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { }

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { }

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { }

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { }

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { }

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { }

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { }

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { }

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { }

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { }

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { }

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { }

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { }

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { }

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { }

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) { }

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) { }

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) { }

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { }
