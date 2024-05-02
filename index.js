// Завдання 1.....

// const productName = 'Droid';
// const pricePerItem = 2000;

// ..............................................
// Завдання 2.....

// let productName = "Droid";
// let pricePerlItem = 2000;
// productName = "Repair droid"
// pricePerlItem = 3500;
// console.log(productName);
// console.log(pricePerlItem);

// Завдання3.......................................
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isFdmin = false;

// Завдання4.....................................
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = ` ${pricePerItem * orderedQuantity}`
// console.log(totalPrice);

// Завдання5.................................
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = ` "You picked ${productName}, price per item is ${pricePerItem} credits " `;
// console.log(message);

// Завдання6....................................
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = `${pricePerDroid*orderedQuantity+deliveryFee}`;
// const message = `"You ordered droids worth ${totalPrice} credits. Delivery( ${deliveryFee} credits) is included in total price "`;
// console.log(message);

// Завдання7...........././././././././././////////////
// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// console.log(sayHi);

////////Завдання 8.............///////////////////////////
// function add(a, b, c) {
//   console.log(`"Addition result equals ${a+b+c}"`);
// }
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Завдання 9..///////////////////////////////////////////////
// function add(a, b, c) {
//     return a + b + c;
// }

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Завдання10//////////////////////////////////////////////////////

// function makeMessage(name,price) {
//     let message = `"You picked ${name}, price per item is ${price} credits"`;
//     console.log(message);
// }
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// Завдання11////////////////////////////////////////////
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     const totalPrice = (orderedQuantity * pricePerItem)
//     return totalPrice;
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// Завдання12////////////////////////////////////////////////

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
//     const message = `"You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} is included in total price."`;
//     return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// Завдання13//////////////////////////////////////////////////////////////////////////
// function isAdult(age) {
  
//   const passed = age >= 18 ;

//     return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// Завдання14///////////////////////////////////////////////////////

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
  
//   const isMatch = SAVED_PASSWORD===password;

  
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword('jqueryismyjam'));

// Для розвитку

let name = prompt("you name");
let old = prompt("Введіть кількість років");
const nameOld = (`${name} : ${old}`);
if (old >= 18) {
  alert(`"Welkome" ${name}`);
  let poll = prompt("Скільки разів на тиждень Ви вживаєте алкоголь. Варіанти: a-(Не вживаю), b-(1-3 рази), с-(Маже щодня)");
  let resultPoll;
  switch (poll) {
    case "a":
      resultPoll = "Ти скучний або хворий";
      break;
    case "b":
      resultPoll = "Не здавайся ти можеш більше, я вірю в тебе";
      break;
     case "c":
      resultPoll = "О чувак ось мій номер 0969428474 нам є про , що поговорити";
      break;
  
    default:
      alert("ВВедіть значення a , b або с");
      break;
          
  }
  alert(`${resultPoll}`)
}
else {
  alert(`"Підрости" ${name}`);
}
