const filterEvenNumbers = function (numbers) {
  return numbers.filter((element) => element % 2 === 0);
};

//-----------------------------------------------------------------------------
const filterLongWords = function (words) {
  return words.filter((word) => word.length > 5);
};

//-----------------------------------------------------------------------------
// people older than 30
const filterAdults = function (people) {
  return people.filter((person) => person.age >= 30);
};

//-----------------------------------------------------------------------------
// active users 
const filterActiveUser = function (listOfUsers) {
  return listOfUsers.filter((user) => user.active);
};

//-----------------------------------------------------------------------------
// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter((element) => element >= 10);
};

//-----------------------------------------------------------------------------
const filterLongBooks = function (listOfBooks) {
  return listOfBooks.filter((book) => book.pages >= 200);
};

//-----------------------------------------------------------------------------
// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (listOfUsers) {
  return listOfUsers.filter((user) => !user.profileComplete);
};

//-----------------------------------------------------------------------------
// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}]
const filterHighGrades = function (listOfStudents) {
  return listOfStudents.filter((student) => student.grade > 80);
};

//-----------------------------------------------------------------------------
// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}]
const filterInStockProducts = function (products) {
  return products.filter((productInfo) => productInfo.inStock === true);
};

//-----------------------------------------------------------------------------
// products with a price lower than the average 
// [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] 
const getSum = (sumOfPrice, product) => product.price + sumOfPrice;

const filterBelowAveragePrice = function (listOfProducts) {
  const sumOfNumbers = listOfProducts.reduce(getSum, 0);
  const averagePrice = sumOfNumbers / listOfProducts.length;

  return listOfProducts.filter((product) => product.price < averagePrice);
};

//-----------------------------------------------------------------------------
const filterStudentsWithAllSubjectsPassed = function (dataOfStudent) {
  return dataOfStudent.filter(({ subjects }) => subjects.every(subject => subject.passed));
};

//-----------------------------------------------------------------------------
// orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}]
const getAverageOf = (orders) => {
  const sum = orders.reduce((sum, { amount }) => amount + sum, 0);
  return sum / orders.length;
};

const filterHighValueOrders = function (orders) {
  const average = getAverageOf(orders);

  return orders.filter(({ amount }) => amount > average);
};

//-----------------------------------------------------------------------------
// books with reviews higher than the average rating [{title: "Book 1", rating: 4}, {title: "Book 2", rating: 5}, {title: "Book 3", rating: 3}]
const getAverage = (books) => {
  const sum = books.reduce((sum, { rating }) => rating + sum, 0);
  return sum / books.length;
};

const filterTopRatedBooks = function (books) {
  const averageRating = getAverage(books);
  return books.filter(({ rating }) => rating > averageRating);
};

//-----------------------------------------------------------------------------
// employees whose salary is higher than the department average [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "IT"}] => [{name: "Bob", salary: 7000, department: "HR"}]

const getAverageSalary = (employees) => {
  const sum = employees.reduce((sum, { salary }) => salary + sum, 0);
  return sum / employees.length;
};

const filterHighSalaryEmployees = function (employees) {
  const averageSalary = getAverageSalary(employees);

  return employees.filter(({ salary }) => salary > averageSalary);
};

// filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = function (people, age) {
  return people.filter(({ age: personAge }) => personAge > age);
};

// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) {
  return products.filter(({ price: priceOfProduct }) => priceOfProduct < price);
};

// filter students who scored above a certain grade in Math [{name: "John", grades: [{name: "John",grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, gradeLimit) {
  return students.filter(({ grades }) => grades.math > gradeLimit);
};

// filter employees who earn more than a certain salary [{name: "Alice", salary: 5000}, {name: "Bob", salary: 7000}] => [{name: "Bob", salary: 7000}]
const filterBySalary = function (employees, salary) {
  return employees.filter(({ salary: personSalary }) => personSalary > salary);
};

// filter orders with a quantity greater than a given number [{orderId: 1, quantity: 10}, {orderId: 2, quantity: 5}] => [{orderId: 1, quantity: 10}]
const filterByQuantity = function (orders, quantityLimit) {
  return orders.filter(({ quantity }) => quantity > quantityLimit);
};

// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) {
  return books.filter(({ year: publishYear }) => publishYear > year);
};

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) {
};

// filter photos with a minimum number of likes [{id: 1, likes: 100}, {id: 2, likes: 50}] => [{id: 1, likes: 100}]
const filterByLikes = function (photos, minLikes) {
  return photos.filter(({ likes }) => likes >= minLikes);
};

// filter users who have made a certain number of posts [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}] => [{username: "Alice", posts: 10}]
const filterByPostCount = function (users, postCount) {
  return users.filter(({ posts }) => posts === postCount);
};

// Convert product names to uppercase, then filter for products with names longer than a certain number [{name: "apple"}, {name: "banana"}] => [{name: "APPLE"}]
const filterLongProductNames = function (products, minLength) {
  return products.filter(({ name }) => name.length < minLength)
};

// Group users by their age, then filter for specific age groups [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAgeGroups = function (users, ageGroup) {
  return users.filter(({ age }) => age > ageGroup);
};

// Convert grades to letter grades, then filter for students who passed [{name: "Alice", grade: 90}, {name: "Bob", grade: 55}] => [{name: "Alice", grade: 90}]
const filterPassingGrades = function (students, passingGrade) {
  return students.filter(({ grade }) => grade > passingGrade);
};

// Calculate VAT-inclusive prices, then filter for those over a certain threshold [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item1", price: 120}]
const filterHighPriceWithVAT = function (products, vatRate, threshold) { };

// Calculate the length of each name, then filter for names longer than a given number [{name: "Alice"}, {name: "Bob"}] => [{name: "Alice"}]
const filterLongNames = function (people, minLength) {
  return people.filter(({ name }) => name.length > minLength);
};

// Normalize scores to a standard range, then filter for students who passed [{name: "John", score: 50}, {name: "Jane", score: 80}] => [{name: "Jane", score: 80}]
const filterNormalizedScores = function (students, minScore) {
  return students.filter(({ score }) => score > minScore);
};

// Convert book publication dates, then filter for books published after a given year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterRecentBooks = function (books, yearThreshold) {
  return books.filter(({ year }) => year > yearThreshold);
};

// Count the number of posts for each user, then filter for users with more than a specific number of posts [{username: "Alice", posts: 100}, {username: "Bob", posts: 50}] => [{username: "Alice", posts: 100}]
const filterActivePosters = function (users, postThreshold) {
  return users.filter(({ posts }) => posts > postThreshold);
};

// Convert students' grades to letter grades, then filter for students who received a specific grade [{name: "Alice", grade: 90}, {name: "Bob", grade: 85}] => [{name: "Alice", grade: 90}]
const filterSpecificGrade = function (students, specificGrade) {
  return students.filter(({ grade }) => grade === specificGrade);
};
