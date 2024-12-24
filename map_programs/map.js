const squaresOf = function (numbers) {
  return numbers.map((element) => element * element);
};

//----------------------------------------------------------------------------

const lengthsOf = function (strings) {
  return strings.map((element) => element.length);
};

//----------------------------------------------------------------------------

const uppercaseOf = function (strings) {
  return strings.map((element) => element.toUpperCase());
};

//----------------------------------------------------------------------------
const firstCharactersOf = function (strings) {
  return strings.map((element) => element.charAt(0));
};

//----------------------------------------------------------------------------
const truthValuesOf = function (numbers) {
  return numbers.map((element) => Boolean(element));
};

//----------------------------------------------------------------------------
const reversedStringsOf = function (strings) {
  return strings.map((element) => [...element].reverse().join(""));
};

const repeatTwice = (string) => string.repeat(2);
//----------------------------------------------------------------------------
const doubleLettersOf = function (strings) {
  return strings.map((element) =>
    [...element].map(repeatTwice).join(""));
};

//----------------------------------------------------------------------------
const negatedBooleansOf = function (booleans) {
  return booleans.map((element) => !element);
};

//----------------------------------------------------------------------------
const charCodesOf = function (strings) {
  return strings.map((element) => element.charCodeAt());
};

//----------------------------------------------------------------------------
const domainNamesOf = function (emails) {
  return emails.map((element) =>
    element.includes("@") ? element.slice(element.indexOf("@") + 1) : "");
};

//----------------------------------------------------------------------------
// split words in ["hello world", "goodbye moon"] => 
// [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map((element) => element.split(" "));
};

//----------------------------------------------------------------------------
// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map((element) => element.join(""));
};

//----------------------------------------------------------------------------
// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map((element) => element.repeat(2));
};

//----------------------------------------------------------------------------
// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const isCharVowel = (char) => 'aeiou'.includes(char.toLowerCase());

const getVowelCount = (initialVal, char) =>
  isCharVowel(char) ? initialVal + 1 : initialVal;

const countVowels = (string) => [...string].reduce(getVowelCount, 0);

const countVowelsOf = function (strings) {
  return strings.map((element) => countVowels(element));
};

//----------------------------------------------------------------------------
// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map((element) => element.reverse());
};

//----------------------------------------------------------------------------
// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const invert = function (f) {
  return function (...args) {
    return !f(...args)
  }
}

const withoutVowelsOf = function (strings) {
  return strings.map((element) =>
    [...element].filter(invert(isCharVowel)).join("")
  )
};

//----------------------------------------------------------------------------
// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const getCumulativeSum = function () {
  let sum = 0;
  return function (num) {
    sum += num
    return sum;
  }
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map((element) => element.map(getCumulativeSum()));
};

//----------------------------------------------------------------------------
// reverse words in ["hello world", "goodbye moon"] 
// => ["olleh dlrow", "eybdoog noom"]
const reversedWordsOf = function (strings) {
  return strings.map((element) => element.split(" ")
    .map((string) => reversedStringsOf([string])[0]).join(" "));
};

//***** */
//----------------------------------------------------------------------------
// extract unique characters from ["apple", "banana", "grape"] => ["apl", "ban", "gra"]
// Maintain the order of their first appearance in each string
const uniqueCharactersOf = function (strings) {

};

//----------------------------------------------------------------------------
// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const range = function (start, end) {
  const rangeArray = [];
  for (let index = start; index < end; index++) {
    rangeArray.push(index)
  }

  return rangeArray;
}

const rangesOf = function (numbers) {
  return numbers.map((number) => range(0, number));
};

//----------------------------------------------------------------------------
// capitalize first letters of ["hello world", "goodbye moon"]
//  => ["Hello World", "Goodbye Moon"]
const getCapitalizedWord = (word) =>
  (word.charAt(0).toUpperCase() + word.slice(1));

const capitalizedFirstLettersOf = function (strings) {
  return strings.map((element) => element.split(" ")
    .map(getCapitalizedWord)
    .join(" "));
};

//----------------------------------------------------------------------------
// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLengthsOf = function (strings) {
  return strings.map((elements) =>
    elements.split(" ").map((singleElement) =>
      singleElement.length));
};

//----------------------------------------------------------------------------
// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) {
  return arrays.map((elements) => elements.flat());
};

//----------------------------------------------------------------------------
// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) {
  return strings.map((string) => [...string].sort().join(""));
};
//*** */
// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedStringsOf = function (strings) { };

//----------------------------------------------------------------------------
// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (listOfObjects) {
  return listOfObjects.map((object) => object.name);
};

//----------------------------------------------------------------------------
// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (listOfObjects) {
  return listOfObjects.map((object) => object.age);
};

//----------------------------------------------------------------------------
// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }]
//  => ["A", "B"]
const firstLettersOfNames = function (listOfObjects) {
  return listOfObjects.map((object) => (object.name).charAt(0));
};

//----------------------------------------------------------------------------
// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) {
  return rectangles.map((object) => object.width * object.height);
};

//----------------------------------------------------------------------------
// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (listOfObjects) {
  return listOfObjects.map((object) => object.active);
};

//----------------------------------------------------------------------------
// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" },  
// { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (listOfObjects) {
  return listOfObjects.map((object) =>
    object.firstName.concat(" ", object.lastName));
};

//----------------------------------------------------------------------------
// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] 
// => [20, 20]
// (price * quantity)
const totalPrices = function (listOfObjects) {
  return listOfObjects.map((object) => object.price * object.quantity)
};

//----------------------------------------------------------------------------
// determine if a person is an adult from [{ name: "Alice", age: 17 }, 
// { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (listOfObjects) {
  return listOfObjects.map((object) => object.age >= 18);
};

//***** */
// create abbreviations from [{ city: "New York", country: "USA" }, 
// { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) {

};

//----------------------------------------------------------------------------
// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, 
// { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (listOfObjects) {
  return listOfObjects.map((object) => object.scores.math);
};

//----------------------------------------------------------------------------
// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (listOfObjects) {
  return listOfObjects.map((object) => [object.x, object.y]);
};

//----------------------------------------------------------------------------
// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, 
// { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (listOfObjects) {
  return listOfObjects.map((object) =>
    [object.firstName.concat(" ", object.lastName), object.age])
};

//----------------------------------------------------------------------------
// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, 
// { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (listOfObjects) {
  return listOfObjects.map((object) => [object.scores.math, object.scores.english]);
};

//----------------------------------------------------------------------------
// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (listOfObjects) {
  return listOfObjects.map((object) => [object.key, object.value]);
};

//----------------------------------------------------------------------------
// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (listOfObjects) {
  return listOfObjects.map((object) => object.name.split(" "));
};

//----------------------------------------------------------------------------
// normalize scores so they fall between 0 and 1 based on the max score from 
// [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = function (listOfObjects) {
  return listOfObjects.map((object) => object.score / 100);
};

//----------------------------------------------------------------------------
// calculate percentage contribution of each number in [10, 20, 30] 
// (relative to the total sum) => [16.67, 33.33, 50]
const percentageContributions = function (numbers) {
  const sumOfNumbers = numbers.reduce(function (sum, element) {
    return sum + element;
  }, 0);

  return numbers.map((element) => ((element / sumOfNumbers) * 100).toFixed(2));
};

//----------------------------------------------------------------------------
// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]
const subtractMin = function (numbers) {
  const smallestNumber = Math.min(...numbers);

  return numbers.map((element) => element - smallestNumber);
};

// calculate ranks (1-based, descending) for scores in 
// [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] 
// => [2, 1, 3]
const calculateRanks = function (objects) { };

// normalize strings by the longest string length in 
// ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)
const getLength = (strings) => {
  const longestWord = strings.reduce((accumalator, word) =>
    accumalator.length < word.length ? word : accumalator);

  return longestWord.length;
}

const normalizeStringLengths = function (strings) {
  const lengthOfLongestWord = getLength(strings);

  return strings.map((string) => string.padEnd(lengthOfLongestWord));
};

// normalize strings by centering them based on the longest string length in 
// ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   "]
// (pad with spaces to justify to the center)
const centerJustifyStrings = function (strings) {
  const longestWordLength = getLength(strings);

  return strings.map(string => {
    const padStart = Math.ceil(longestWordLength - string.length) / 2 + string.length;
    return string.padStart(padStart).padEnd(longestWordLength)
  });
};

// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] 
// => [25, 62.5, 100]
const getMaxNum = (numbers) =>
  numbers.reduce((maxNum, number) =>
    maxNum > number ? maxNum : number, -Infinity);

const scaleToMax100 = function (numbers) {
  const maxNumber = getMaxNum(numbers);
  const scaleValue = 100 / maxNumber

  return numbers.map(number => number * scaleValue);
};

// map each number to the difference between it and the average of the array in [10, 20, 30] => [-10, 0, 10]
const getAverageOf = function (numbers) {
  const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
  return sumOfNumbers / numbers.length;
}

const differencesFromMean = function (numbers) {
  const average = getAverageOf(numbers);

  return numbers.map(number => number - average);
};

// map each string to its frequency in ["apple", "banana", "apple", "apple", "banana"] => [3, 2, 3, 3, 2]
const stringFrequencies = function (strings) { };

// mark the largest number in an array as true, others as false in [1, 3, 2] => [false, true, false]

const markLargestNumber = function (numbers) {
  const largestNum = getMaxNum(numbers);

  return numbers.map(number => number === largestNum);
};
