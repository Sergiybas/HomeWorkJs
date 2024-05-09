///////////////--1--//////////////////////////
// function checkAge(age) {
//     let result = age;
//     if (result>=18) {
//     return "You are an adult";
//   }
//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(18));

// ///////////////--2--/////////////////////////////////////////
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//     if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword('jqueryismyjam'));

// /////////////////..3..//////////////////////////////////////
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   return ordered > available
//     ? 'Your order is too large, not enough goods in stock!'
//     : 'The order is accepted, our manager will contact you';
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ////////////////////..4..///////////////////////////////////////
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);

// ///////////////////..5..//////////////////////////////////////
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// let firstElement = fruits[0];
// let secondElement = fruits[1];
// let lastElement = fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// //////////////////////...6.../////////////////////////////////////
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);

// /////////////////..7..////////////////////////////////////////
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// ////////////////..8..///////////////////////////////////////
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length;
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElementIndex);
// console.log(lastElement);

// /////////////////..9..///////////////////////////
// function getExtremeElements(array) {
//    
// return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// //////////////////..10../////////////////////////////////////
// function splitMessage(message, delimiter) {
//   let words= message.split(delimiter);

//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));

// /////////////////..11..//////////////////////////////////////
// function calculateEngravingPrice(message, pricePerWord) {
//   let result = message.split(' ').length * pricePerWord;
//   return result;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// //////////////////..12..///////////////////////////////////////////////////

// function makeStringFromArray(array, delimiter) {
//   let string = array.join(delimiter);
//   // Change code below this line
//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));

// //////////////////////...13...////////////////////////////////////////////////
// function slugify(title) {
//   let result = title.toLowerCase().split(' ').join('-');
//   return result;
// }
// console.log(slugify('Arrays for begginers'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));

// /////////////////////..14..///////////////////////////
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// /////////////////..15..//////////////////////////////////

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);
 
// ///////////////..16..////////////////////////////////////
// function makeArray(firstArray, secondArray, maxLength) {
//   let result = firstArray.concat(secondArray);
//   if (result.length > maxLength) {
//     result = result.slice(0, maxLength);
//     return result;
//   }

//   return result ;
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)
// );
