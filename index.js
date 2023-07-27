
/*
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
*/

const reverseWord = (string)=> {  
   return string.split("").reverse().join(""); 
}

// console.log(reverseWord('Hello world'))

/*
Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
*/

const sumOfPositiveNumbers = (arr)=> {
    const positiveArr = []
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]>= 0){
       positiveArr.push(arr[i])
       }        
    }
    const sum = positiveArr.reduce((sum, acc)=> sum + acc, 0)
    return sum
}
const numArr = [2, -5, 10, -3, 7];
const positiveNumberSum = sumOfPositiveNumbers(numArr)
// console.log(positiveNumberSum);

/*
 3. Write a JavaScript program to find the most frequent element in an array and return it. 
*/

function findMostFrequentElement(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array.");
  }

  // Create a frequency dictionary to store the count of each element
  const frequencyDict = {};

  // Loop through the array and populate the frequency dictionary
  for (const element of arr) {
    if (frequencyDict[element]) {
      frequencyDict[element]++;
    } else {
      frequencyDict[element] = 1;
    }
  }

  // Find the most frequent element in the frequency dictionary
  let mostFrequentElement;
  let maxFrequency = 0;

  for (const key in frequencyDict) {
    if (frequencyDict[key] > maxFrequency) {
      mostFrequentElement = key;
      maxFrequency = frequencyDict[key];
    }
  }

  return mostFrequentElement;
}

// Test the function
const array = [1, 2, 3, 2, 2, 4, 5, 2, 6, 2];
const result = findMostFrequentElement(array);
// console.log("The most frequent element is:", result);

/*
  Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers
*/

function findTwoSumIndices(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  for (let i = 0; i < sortedArr.length; i++) {
    const currentSum = sortedArr[left] + sortedArr[right];

    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no two numbers are found that add up to the target
  return null;
}

// Test the function
const sortedArr = [1, 3, 6, 8, 11, 15];
const target = 9;
const result2 = findTwoSumIndices(sortedArr, target);

if (result2 !== null) {
  console.log(
    `The indices of the two numbers are: [${result}] (numbers at indices ${
      result[0]
    } and ${result[1]}: ${sortedArr[result[0]]} + ${
      sortedArr[result[1]]
    } = ${target})`
  );
} else {
  console.log("No two numbers found that add up to the target.");
}

/**
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
 */

function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      // Check for division by zero
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator.";
  }
}

// Test the calculator function
const number1 = 10;
const operator = "+";
const number2 = 5;
const result5 = calculator(number1, operator, number2);
console.log(`Result: ${result5}`);


