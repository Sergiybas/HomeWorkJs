// ///////////.........1./////////////////
// function changeEven(numbers, value) {
//     return numbers.map(number => number % 2 === 0 ? number + value : number);

// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// /////////////.....2..../////////////////////////
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// ///////////....3.....//////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.table(titles);

// //////////....4...//////////////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(({ genres }) => genres);
// console.log(genres);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// ///////////...5.../////////////////////
// const getUserNames = users.map(user => user.name);
// console.log(getUserNames);
// //////////////...6.../////////////////////////
// const getUserEmails = users.map(user => user.email);
// console.log('getUserEmails::: ', getUserEmails);

///////////////..7..///////////////////////////////
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log('evenNumbers::: ', evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 != 0);
// console.log('oddNumbers::: ', oddNumbers);

/////////////////...8...///////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// const allGenres = books.flatMap(book=>book.genres);
// console.log('allGenres::: ', allGenres);
// const uniqueGenres = allGenres.filter((genre, index, array) =>array.indexOf(genre) === index);
// console.log('uniqueGenres::: ', uniqueGenres);

///////////////....9....//////////////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING).map(book => book.title);
// console.log('topRatedBooks::: ', topRatedBooks);

// const booksByAuthor = books.filter(book => book.author === AUTHOR).map(book=>book.title);
// console.log('booksByAuthor::: ', booksByAuthor);

///////////////...10....//////////////////////////////
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];
// const getUsersWithEyeColor = (players, color) =>
//   players.filter(player => player.eyeColor === color).map(player => player.name);
// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'brown'));
// console.log(getUsersWithEyeColor(users, 'blue'));

///////////....11....////////////////////////
// const getUsersWithAge = (users, minAge, maxAge) =>users.filter(user=>user.age>=minAge&&user.age<=maxAge).map(user=>user.name);
// console.log('getUsersWithAge::: ', getUsersWithAge(users, 20, 30));
// console.log('getUsersWithAge::: ', getUsersWithAge(users, 30, 40));

////////////.....12....//////////////////////////
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// console.log(getUsersWithFriend(users, 'Adrian Cross'));

////////////....13.....////////////////////////////
// const getFriends = users => users.flatMap(user => user.friends).filter((user,index,array)=>array.indexOf(user)===index);
// console.table( getFriends(users));

////////////////....14..../////////////////
// const getActiveUsers = users => users.filter(user=>user.isActive);

// console.log( getActiveUsers(users));

//////////////....15....////////////////////
// const getInactiveUsers = users => users.filter(user=>!user.isActive);
// console.log(getInactiveUsers(users));

//////////////////....16.....///////////////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookByAuthor);

//////////////....17....///////////////////////////
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/////////////////////..18...//////////////////////
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(first => first % 2 === 0);
// console.log('eachElementInFirstIsEven::: ', eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every(first => first % 2 != 0);
// console.log('eachElementInFirstIsOdd::: ', eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(first => first % 2 === 0);
// console.log('eachElementInSecondIsEven::: ', eachElementInSecondIsEven);
// const eachElementInSecondIsOdd = secondArray.every(first => first % 2 != 0);
// console.log('eachElementInSecondIsOdd::: ', eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every(first => first % 2 === 0);
// console.log('eachElementInThirdIsEven::: ', eachElementInThirdIsEven);
// const eachElementInThirdIsOdd = thirdArray.every(first => first % 2 != 0);
// console.log('eachElementInThirdIsOdd::: ', eachElementInThirdIsOdd);

/////////...19.../////////////////////////////
// const isEveryUserActive = users => users.every(user=>user.isActive);
// console.log(isEveryUserActive(users));

///////...20....////////////////////////////////
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line
// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// console.log(' anyElementInFirstIsEven::: ',  anyElementInFirstIsEven);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 != 0);
// console.log('anyElementInFirstIsOdd::: ', anyElementInFirstIsOdd);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// console.log('anyElementInSecondIsEven::: ', anyElementInSecondIsEven);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 != 0);
// console.log('anyElementInSecondIsOdd::: ', anyElementInSecondIsOdd);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// console.log('anyElementInThirdIsEven::: ', anyElementInThirdIsEven);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 != 0);
// console.log('anyElementInThirdIsOdd::: ', anyElementInThirdIsOdd);

/////////////.....21....////////////////////////////
// const isAnyUserActive = users => users.some(user => user.isActive);
// console.log(isAnyUserActive(users));

///////////////...22..../////////////////////////////
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((total, number) => total + number);
// console.log('totalPlayTime::: ', totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log('averagePlayTime::: ', averagePlayTime);

/////////////////...23.../////////////////////////////

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, {playtime,gamesPlayed}) => acc + playtime / gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);

/////////////////////...24.../////////////////////
// const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance, 0);

// console.log(calculateTotalBalance(users));

/////////////...25...////////////////////////////////
// const getTotalFriendCount = users => users.reduce((acc, { friends }) => acc + friends.length, 0);

// console.log(getTotalFriendCount(users));

///////////////...26...///////////////////////////////
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log('ascendingReleaseDates::: ', ascendingReleaseDates);

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(' alphabeticalAuthors::: ', alphabeticalAuthors);

////////////.......27....///////////////////////////

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log('ascendingReleaseDates::: ', ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log('descendingReleaseDates::: ', descendingReleaseDates);

///////////...28.../////////////////////////////////
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log('authorsInAlphabetOrder::: ', authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);

//////////////////..29.../////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((firstName, secondName) =>
//   firstName.title.localeCompare(secondName.title)
// );
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((firstName, secondName) =>
//   secondName.title.localeCompare(firstName.title)
// );
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating
// );
// console.log('sortedByAscendingRating::: ', sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating
// );
// console.log('sortedByDescentingRating::: ', sortedByDescentingRating);

// //////////////...30....///////////////////////////
// const sortByAscendingBalance = users => [...users].sort((a,b)=>a.balance-b.balance);
// console.log(sortByAscendingBalance(users));

/////////....31....///////////////////////////////
// const sortByDescendingFriendCount = users =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);

// console.table(sortByDescendingFriendCount(users));

/////////.....32..../////////////////////////////
// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortByName(users));

///////////....33....//////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);

/////////////////....34...///////////////////////
// const getNamesSortedByFriendCount = users =>
//   [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);

// console.log(getNamesSortedByFriendCount(users));

///////////////////....35.../////////////////////////
// const getSortedFriends = users =>
//   [...users]
//     .flatMap(user => user.friends)
//     .filter((user, index, nameAr) => nameAr.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));

///////////////////.....36......////////////////////////
// const getTotalBalanceByGender = (users, gender) =>
//   users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0);

// console.log(getTotalBalanceByGender(users, 'male'));
// console.log(getTotalBalanceByGender(users, 'female'));
