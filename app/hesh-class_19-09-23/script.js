//Map

//q1 convert all the element in this array to their squares

//given array : [1,2,3,4]

const numbers = [1, 2, 3, 4];
// output to be [1,4,9,16];

const squareNumbers = numbers.map((num) => num * num);

console.log(squareNumbers);

const names = ["Alex", "Hesh", "Johny"];

//map on the array, then want you to add to each item the word hello before
//["Hello Alex", "Hello Hesh", "Hello Johny"];

const helloNames = names.map((name) => "Hello" + " " + name);

console.log("helloNames", helloNames);

//Q3 on map

const tShirts = ["t-shirt 1", "t-shirt 2", "t-shirt 3", "t-shirt 4"];

//map on the array of t-shirts and then put a smiley face on them

const smileyPrint = tShirts.map((tShirt) => `${tShirt}😸`);
console.log("smileyPrint", smileyPrint);

//q4

let employee = {
  name: "Rahul",
  department: "sales",
  details: function () {
    return this.name + " " + "works with Department" + " " + this.department;
  },
};

console.log(employee.details());

//q5 School library system
// imagine a school named "prestige Academy". The school has a digital system to track books in its library. Each book in the system has attributes like "title, author" and a method to display its availability status.

let book = {
  title: "Ole Brumm",
  author: "A. A. Milne",
  isAvailable: true,
  availabilityStatus: function () {
    if (this.isAvailable) {
      return this.title + " is available for borrowing";
    } else {
      return this.title + "is currently borrowed";
    }
  },
};

// filter - how to use it

const numbersFilter = [1, 2, 3, 4];

// q1 - use the filter function to filter out all the numbers greater than 2

const filteredNumbers = numbersFilter.filter((num) => num > 2);

//q2 - the first year Front End class got their scores
// filter out the students who scored more than 80

const students = [
  { name: "Hesh", score: 98 },
  { name: "Jan", score: 40 },
  { name: "Ali", score: 100 },
  { name: "Jayla", score: 70 },
];

const filteredStudents = students.filter((student) => student.score >= 80);

console.log(filteredStudents);

//q3 - filter out the null and undefined values

const mixedArray = [10, null, "hello", undefined, 42, null, "world"];

/* const cleanArray = mixedArray.filter(
  (array) => array !== null && array !== undefined
); */

//best sample:
const cleanArray = mixedArray.filter((array) => array != null);

// super short exs
/* const cleanArray = mixedArray.filter((array) => !!array); */

console.log(cleanArray);

//q4

const cart = [
  { title: "Mayhem Fighter", inStock: true, price: 8 },
  { title: "Build-a-farm", inStock: true, price: 9 },
  { title: "Ghost Story", inStock: false, price: 8 },
  { title: "Fast Car Racer", inStock: true, price: 7 },
  { title: "Elf and Dwarf RPG", inStock: false, price: 8 },
];

const filteredCart = cart.filter((item) => item.inStock && item.price <= 50);

console.log(filteredCart);

//q5 - box of chocolates is maybe an array of numbers - get the total number of chocolates

const chocolates = [1, 2, 3, 4, 5];
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

const totalSum = chocolates.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log("totalSum: ", totalSum);

//q6 - make it full array

const arrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
//[1,2,3,4,5,6,7,8,9]

const fullArray = arrays.reduce((acc, currentArray) => {
  return acc.concat(currentArray);
}, []);
