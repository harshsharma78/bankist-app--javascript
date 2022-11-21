'use strict';

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ARRRAY METHODS

// // SLICE --> Doesn't mutate array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// // SPLICE --> Mutates the array

// // console.log(arr.splice(2));
// // arr.splice(-1);
// // console.log(arr);

// // REVERSE --> mutates

// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT --> mutates

// const letters = arr.concat(arr2);
// console.log(letters);

// // JOIN

// console.log(letters.join('-'));

// // FOREACH

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) console.log(`You deposited ${movement}`);
//   else console.log(`You withdrew ${Math.abs(movement)}`);
// }

// console.log('\n------FOREACH-------\n');

// // movements.forEach(function (movement) {
//   if (movement > 0) console.log(`You deposited ${movement}`);
//   else console.log(`You withdrew ${Math.abs(movement)}`);
// });

// movements.forEach(function (movement, index, arr) {
//   if (movement > 0)
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
// });

// // FOREACH WITH MAPS AND SETS

// console.log('--------MAPS-------');
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// console.log('------SETS------');
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function (value,_, set) {
//   console.log(`${value}:${value}`);
// });

/*--------------------------------------------------------***---------------------------------------------------- */
/*--------------------------------------------------------***---------------------------------------------------- */

// DATA TRANSFORMATION METHODS --> MAP, FILTER, REDUCE

// // The MAP Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// console.log(
//   '-------------------------using forOf--------------------------------'
// );
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
//   // {
//   // if (mov > 0) return`Movement ${i + 1}: You deposited ${mov}`;
//   // else return`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;}
// );
// console.log(movementDescriptions);

/*--------------------------------------------------------***---------------------------------------------------- */

// // The Filter Method
// const deposits = movements.filter(mov => mov > 0); // Positive Values of movements array
// const withdrawals = movements.filter(mov => mov < 0); // Negative Values of movements array

/*--------------------------------------------------------***---------------------------------------------------- */

// The Reduce Method

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// },0 /* initial value at a loop iteration */);

// const balance = movements.reduce(
//   (acc, cur) => acc + cur,
//   0
// ); /* 0 --> initial value at a loop iteration */

// Maximum Value in an array
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

/*--------------------------------------------------------***---------------------------------------------------- */

// CHAINING METHODS

// const eurToUsd = 1.1;
// console.log(movements);

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

/*--------------------------------------------------------***---------------------------------------------------- */

// THE FIND METHOD

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

/*--------------------------------------------------------***---------------------------------------------------- */

// THE FINDINDEX METHOD --> btnClose EventHandler

/*--------------------------------------------------------***---------------------------------------------------- */

// SOME AND EVERY

// Some
// const anyDeposits = movements.some(mov => mov > 0); // Boolean Value
// console.log(anyDeposits);

// Every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate Callback
// const deposit = mov => mov > 0;
// console.log(movements.every(deposit));
// console.log(movements.some(deposit));
// console.log(movements.filter(deposit));

/*--------------------------------------------------------***---------------------------------------------------- */

// FLAT AND FLATMAP

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // Flattens the array

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2)); // 2 --> level of deepness of nesting

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc,mov) => acc + mov,0);
// console.log(overallBalance);

// Flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// FlatMap
// const overalBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

/*--------------------------------------------------------***---------------------------------------------------- */

// SORTING ARRAYS

// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); // Mutates
// console.log(owners);

// Numbers
// console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// movements.sort((a, b) => a - b);
// console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
// movements.sort((a, b) => b - a);
// console.log(movements);

/*--------------------------------------------------------***---------------------------------------------------- */

// MORE WAYS OF CREATING AND FILLING ARRAYS

// const arr = [1, 2, 3, 4, 5, 4, 3, 2, 2];
// console.log(new Array(1, 2, 3, 4, 5, 4, 3, 2, 2));

// Array.fill with Empty Arrays
// const x = new Array(7);
// console.log(x);

// x.fill(1, 3, 5); // 3 --> beginIndex, 5 --> endIndex
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i++);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2);
// });

/*--------------------------------------------------------***---------------------------------------------------- */
/*--------------------------------------------------------***---------------------------------------------------- */

// CODING CHALLENGE #1 (145)

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const catsFound = dogsJulia.slice();
//   catsFound.splice(0, 1);
//   catsFound.splice(-2);
//   console.log(catsFound);
//   const dogs = catsFound.concat(dogsKate);

//   dogs.forEach(function (ele, i) {
//     if (ele >= 3)
//       console.log(`Dog number ${i + 1} is an adult, and is ${ele} years old`);
//     else if (ele < 3)
//       console.log(
//         `Dog number ${i + 1} is still a puppy 🐶`
//       );
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/*----------------------------------------------------------------***------------------------------------------------------------------ */
/*----------------------------------------------------------------***------------------------------------------------------------------ */

// CODING CHALLENGE #2 (151)
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAge);
//   const adults = humanAge.filter(age => age >= 18);
//   console.log(adults);
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
//   // const average = adults.reduce(
//   //   (acc, age, i, arr) => acc + age / arr.length,
//   //   0
//   // );
// };
// const testData1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const testData2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(testData1);
// console.log(testData2);

/*----------------------------------------------------------------***------------------------------------------------------------------ */
/*----------------------------------------------------------------***------------------------------------------------------------------ */

// CODING CHALLENGE #3 (153)

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(adults => adults >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const testData1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const testData2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(testData1, testData2);

/*----------------------------------------------------------------***------------------------------------------------------------------ */
/*----------------------------------------------------------------***------------------------------------------------------------------ */

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(food => (food.recFood = Math.trunc(food.weight ** 0.75 * 28)));

// 2.
const dogsSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogsSarah);
console.log(`Sarah's dog is eating too 
${dogsSarah.curFood > dogsSarah.recFood ? 'MUCH' : 'LOW'}`);

// 3.
const ownersEatTooMuch = dogs
  .filter(food => food.curFood > food.recFood)
  .flatMap(food => food.owners);

const ownersEatTooLittle = dogs
  .filter(food => food.curFood < food.recFood)
  .flatMap(food => food.owners);

console.log('Owners Eat Too Much');
console.log(ownersEatTooMuch);

console.log('Owners Eat Too Little');
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}' dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(food => food.curFood === food.recFood));

// 6.
const checkOkayFood = food =>
  food.curFood > food.recFood * 0.9 && food.curFood < food.recFood * 1.1;
console.log(dogs.some(checkOkayFood));

// 7.
console.log(dogs.filter(checkOkayFood));

// 8.
console.log(dogs.slice().sort((a, b) => a.recFood - b.recFood));
