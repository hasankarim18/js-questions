
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

const findMostFrequent = (array)=> {
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < array.length; i++) {
        const first = array[i];
        // console.log(first);
        for (let j = 0; j < array.length; j++) {
             if (array[i] == array[j]) m++;
             if (mf < m) {
               mf = m;
               item = array[i];
             }
        }
        
    }
    m = 0;
   console.log(item, mf);
}

const mostFreequentArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const mostFreequentInArray = findMostFrequent(mostFreequentArray);