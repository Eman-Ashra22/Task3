
// 1-function that takes an array of numbers and returns the sum of these numbers.

const arr = [10, 20, 30, 40, 50];
 const sum = arr. reduce((calculator, Value) => calculator + Value, 0); 
 console. log(sum);


//2-function that takes an array of numbers and returns the largest number in the array

// first
 const array = [40, 60, 100];
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log(max);


// second
const array1 = [10, 70, 250];
console.log(Math.max(...array1))




//3- function that takes a text string and returns the same string but reversed

let original = "Hello World";
let reversed = original.split('').reverse().join('');
console.log(reversed);

//4-function that takes an array of numbers and returns a new array without the duplicate numbers.

let arrayOfRepeated = [15,25,30,15,50,15,30,70,120,50];

function removeDuplicates(arrayOfRepeated) {
    let unique = [];
    arrayOfRepeated.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arrayOfRepeated));












