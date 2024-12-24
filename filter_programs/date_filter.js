// orders placed in the last 30 days 
// [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] 
// => [{orderDate: "2024-12-01"}]
const filterRecentOrders = function (orders) { };

// active users who posted in the last 7 days 
// [{username: "alice", lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: "2024-11-20", active: true}] => [{username: "alice", lastPostDate: "2024-12-01", active: true}]
const extractDate = function (dateInString) {
  const [year, month, day] = dateInString.split("-");

  return {
    year: +year,
    month: +month,
    day: +day,
  };
};

const filterRecentActiveUsers = function (users) {
  const listOfDates = users.map(user => extractDate(user.lastPostDate));
  console.log(listOfDates);
};

// people whose birthday is this month [{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}] => [{name: "Alice", birthDate: "2024-12-01"}]
const filterBirthdaysThisMonth = function (people) { };

// filter events that occur before a certain date [{name: "Event1", date: "2024-12-01"}, {name: "Event2", date: "2024-11-15"}] => [{name: "Event2", date: "2024-11-15"}]
const filterByDate = function (events, date) {

};