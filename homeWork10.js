///////////////////////...1...////////////////////
// class Car{ }

//////////////////////...2....////////////////////
// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }
//  const cars = new Car('Audi', 'Q3', 36000);
// console.log(cars);

///////////////////...3...//////////////////////

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const cars = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(cars);

//////////////////...4.....//////////////////////
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return (`${this.price}`);
//   }
//   changePrice(newPrice) {
//       this.price = newPrice;
//   }
// }
// const cars = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const cars1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const cars2 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(cars);
// cars.getPrice();
// cars.changePrice(1000);
// console.log(cars.getPrice());

//////////////////////..5..///////////////////////////
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items = this.items.filter(item => item != itemToRemove);
//   }
// }
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//////////////////....6...../////////////////////////////
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//////////////...7..//////////////////////////////
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
// }
// const cars = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// cars.changeBrand('Honda');
// console.log(cars.getBrand());

//////////////////....8....////////////////////////

// class Storage {
//     #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems());

//////////////////.....9....////////////////////////
// class StringBuilder {
//   #value
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

/////////////....10.///////////////////
// class Car {
//   // Change code below this line
//     #brand;
//     #model;
//     #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }
//   get Brands() {
//     return this.#brand;
//   }
//   set changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get Models() {
//     return this.#model;
//   }

//   set updateModel(newModel) {
//     this.#model = newModel;
//   }
//   get Prices() {
//     return this.#price;
//   }
//   set Prices(newPrice) {
//     this.#price = newPrice;
//   }
// }

////////////////.....11....////////////////////////////
// class Car {
//   static MAX_PRICE = 50000;
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

////////////////...12...////////////////////////
// class Car {
//   static #MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.price = price;
//   }
//  static checkPrice(price) {
//     if (price <= Car.#MAX_PRICE) {
//       return 'Success! Price is within acceptable limits';
//     } else {
//       return 'Error! Price exceeds the maximum';
//     }
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

///////////////....13....//////////////////////
//   class User {
//     constructor(email) {
//       this.email = email;
//     }
//     get email() {
//       return this.email;
//     }
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }
// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

//////////////...14....///////////////////////////
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

///////////////...15....//////////////////////////
// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }
// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
