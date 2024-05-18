// //////////...1../////////////////////
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(meanTemperature);

// /////////...2...//////////////
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);
// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(meanTemperature);

// //////////...3....///////////////////

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
//   icon: 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// };
// const { yesterday, today, tomorrow, icon: highIcon } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(highIcon);
// console.log(meanTemperature);

// /////////////...4....//////////////////
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// ////////....5.../////////////////////

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: { low: lowToday, high: highToday, icon: todayIcon },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(todayIcon);

// ////////////...6...//////////////////////////
// function calculateMeanTemperature({
//   today: { low: todayLow, high: todayHigh } = {},
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh } = {},
// } = {}) {
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } })
// );

// ///////////...7...//////////////////////////////
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// //////////...8....//////////////////////////////

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);
// console.log(worstScore);

// ////////////...9...///////////////////////////////
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {...defaultSettings,...overrideSettings};
// console.log(finalSettings);

// ////////////////...10...////////////////////////////

// function makeTask(data) {
//   let result = {
//     completed: false,
//     category: 'General',
//     priority: 'Normal',
//     ...data,
//   };

//   return result;
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({ text: 'Buy bread' }));

// //////////////...11...////////////////////////

// function add(...args) {
//   let result = 0;
//   for (const arg of args) {
//     result += arg;
//   }
//   return result;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// /////////////...12.../////////////////////////////
// function addOverNum(numb, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (numb < arg) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// //////....13....////////////////////////////
// function findMatches([...numb], ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (numb.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// //////...14...//////////////////////////////////
// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// console.log(bookShelf.addBook('Haze'));
// console.log(bookShelf.removeBook('Red sunset'));
// console.log(bookShelf.updateBook('Sands of dune', 'Dune'));
//
// //////////////////...15...///////////////////////
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;
//   },
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
// console.log(bookShelf.updateBook('The last kingdom', 'Dune'));

// ///////...16......//////////////////////
// const atTheOldToad = {
//   potions:[],
// };

// ////////....17...//////////////////////////

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions(potions) {},
// };
// console.log(atTheOldToad.getPotions());

// //////...18.....////////////////////////////////

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     return this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

// /////////////////...19..../////////////////////////

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     return this.potions.splice(this.potions.indexOf(potionName), 1);
//   },
// };
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));

// ////////////...20.....////////////////////////////

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));

// ////////////////...21.../////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name.includes(newPotion.name)) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const potionIndex = this.potions[i].name;

//       if (potionIndex === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const potionIndex = this.potions[i].name;
     
//       if (potionIndex === oldName) {
//         this.potions[i].name = newName;
//         return this.potions;
//       }
//     }
//         return `Potion ${oldName} is not in inventory!`;

//   },
// };

// // console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// // console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
// console.log(atTheOldToad.getPotions());
