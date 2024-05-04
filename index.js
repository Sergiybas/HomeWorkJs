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
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isFdmin = false;

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



// ///////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////
// Завдання 1 ...////////////////////////////////////////////////////////////////
// function checkAge(age) {
//   let message;

//   if ( age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// Завдання2////////////////////////////////////////////////////////////
// function checkStorage(available, ordered) {
//     let message;
//     if (available >= ordered) {
//         message= "Order is processed, our manager will contact you."
//     }
//     else {
//         message="Not enough goods in stock!"
//     }

//   return message;
// }
// console.log( checkStorage(100, 50));
// console.log( checkStorage(100, 130));
// console.log( checkStorage(200, 20));
// console.log( checkStorage(200, 150));

// завдання 3///////////////////////////////////////////////////////////////
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// console.log(a = a += 2);
// console.log(b = b -= 4);
// console.log(c = c *= 3);
// console.log(d = d /= 10);

// Завдання 4//////////////////////////////////////////////////////////////////////
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     let priceOrder = pricePerDroid * orderedQuantity;
//     if (priceOrder > customerCredits) {
//         message = "Insufficient funds!"
//     }
//     else {
//         message = `"You ordered ${orderedQuantity} droids, you have ${customerCredits - priceOrder} credits left"`;
//     }
    

//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// Завдання-5...///////////////////////////////////////////////////////
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password===null) {
//     message =  'Canceled by user!';
//   } else if (password===ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Завдання -6...../////////////////////////////////////////////////////////

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (available < ordered) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";

//   }
//     return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));

// Завдання 7.../////////////////////////////////////////////////////////////////////
// function isNumberInRange(start, end, number) {
//   const isInRange =number>start && number<end ;

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20,50,24));
// console.log(isNumberInRange(20,50,76));

// Завдання 8....///////////////////////////////////////////////////

// function checkIfCanAccessContent(subType) {
//   const canAccessContent =subType==="vip" || subType==="pro" ;

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log( checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// Завдання 9..........////////////////////////////////////////////
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ;
//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20,50,24));
// console.log(isNumberNotInRange(20, 50, 76));

// Завдання 10...........//////////////////////////////////////
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   }
//   else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// Завдання 11..........////////////////////////////////////////////////
// function checkStorage(available, ordered) {
//   let message;
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//    return message;
//   }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// Завдання 12....../////////////////////////////////////////////////
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";

//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// Завдання 13........//////////////////////////////////////////////
// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional" :
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//      break;
     
//   }
// return price;
// }
//  console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
//  console.log(getSubscriptionPrice("starter"));

// Завдання 14 ////////////////////////////////
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//        message = "Access denied, wrong password!";
//       break;
//   }
//     return message;
// }
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Завдання 15....///////////////////////////////////////////////////

// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;
    
//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
  
//     default:
//       message = "Sorry, there is no delivery to your country";
//       break;
//   }
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// Завдання 16........///////////////////////////////////////////////////

// function getNameLength(name) {
//   const message = `Name ${name} is ${name .length} characters long`;
//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// Завдання 17........../////////////////////////////////////////

// const courseTopic = "JavaScript essentials";
// console.log(courseTopic);

// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;
// console.log(courseTopicLength.length);
// console.log(firstElement.slice(0, 1));
// console.log(lastElement.slice(-1));

// Завдання 18.........../////////////////////////////


// function getSubstring(string, length) {
//   const substring = string.slice(0,length);

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// Завдання 19///////////////////////////////////////////
// function formatMessage(message, maxLength) {
//     let result;
//     if (message.length<= maxLength) {
//         result = message;
//     }
//     else {
//         result=(message.slice(0,maxLength)+"...");
//     }

//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// Завдання 20///////////////////////////////////////////////////////////////////

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();
    

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

// Завдання 21///////////////////////////////////////////////////////////////

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log( checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim") );
// console.log(checkForName("Vadim Nekrasov", "Dima") );

// Завдання 22...///////////////////////////////////////////////////////////

function checkForSpam(message) {
  let result;
    message = message.toLowerCase();
    result = message.includes("spam")||message.includes("sale");
        
    
  return result;
}
console.log(checkForSpam("Latest technology news"));
console.log( checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));






 

