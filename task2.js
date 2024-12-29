// Write a program to move all zeros in an array to the end while maintaining the relative order of other elements.
// const arr=[1,2,0,0,5,0,0,10];
// const n=arr.length;
// temp=new Array(n);
// let j=0;
// for(let i=0;i<n;i++){
//     if(arr[i]!=0){
//         temp[j++]=arr[i];
//     }
// }
// while(j<n){
//     temp[j++]=0;
// }
// for(let i=0;i<n;i++){
//     arr[i]=temp[i];
// }

// for(i=0;i<n;i++){
//     console.log(arr[i]);
    
// }



// Write a program to check if an array is the same when reversed..
// const arr1 = [1,2,3,2,1];
// const arr2 = [1,2,3,4,5];
// function x(arr) {
//     const n = arr.length;

//     for (let i = 0; i < Math.floor(n / 2); i++) {
//         if(arr[i]!==arr[n-1-i]){
//             return false; 
//         }
//     }
//     return true; 
// }
// console.log(` ${x(arr1)}`);
// console.log(` ${x(arr2)}`); 




//  write a program to Count the number of even and odd numbers.
// const ar=[1,2,22,12,3,4,10];
// let evenCount=0,oddCount=0;
// for(let num of ar) {
//     num%2===0?evenCount++:oddCount++;
// }
// console.log("Even Count:",evenCount);
// console.log("Odd Count:",oddCount);
// console.log(`Number of even numbers: ${evenCount}`); 
// console.log(`Number of odd numbers: ${oddCount}`);   





//  write a program to Remove the first element from an array.
// function removeFirstElement(arr) {
//     if (arr.length>0) {
//         arr.shift();
//     }else{
//         console.log("The array is empty");
//     }
// }
// let arr =[1,2,3,4,5];
// console.log("Original array:",arr);

// removeFirstElement(arr); 
// console.log("Array after removing the first element:",arr);






// You are given an object salaries where the keys are employee names and the values are their respective salaries. Write a code snippet that will increase each employee's salary by 10% and then print the updated salary of each employee.
// const salaries={
//     Jobin: 50000,
//     Athul: 60000,
//     Sree: 45000,
//     Musi: 70000,
// };
// for(let employee in salaries) {
//     salaries[employee]*=1.10; 
// }
// console.log(salaries);





// Write a program that prints the multiplication table for numbers 1 through 10.
// const multiplicationTable =[];
// for (let i=1; i<=10;i++) {
//     const row=[];
//     for (let j=1;j<=10;j++) {
//         row.push(i*j); 
//     }
//     multiplicationTable.push(row); 
// }
// for (let i=0; i<multiplicationTable.length; i++) {
//     console.log(`Multiplication Table for ${i + 1}:`);
//     for (let j = 0; j<multiplicationTable[i].length;j++) {
//         console.log(`${i+1}x${j+1}=${multiplicationTable[i][j]}`);
//     }
//     console.log(" "); 
// }



//que: Let array=[1,2,5,1,6,3,7,8,8,5,4,4,1,5,2,4]
// Count the repeating elements and make a new array...
// Expected output :
// new array=[3,2,3,2,3]
// let duparray=[1,2,5,1,6,3,7,8,8,5,4,4,1,5,2,4], 
//   count = 0; 
// const obje={} 
// for (item of duparray){ 
//     for( item2 of duparray){ 
//         if (item==item2){ 
//             count+=1 ;
//             obje[item]=count ;
//   } 
//   } 
//     count=0; 
 
// } 
// let newarray2=[]; 
// for (key in obje){ 
//     if(obje[key]>=2){ 
//    newarray2.push(obje[key]) 
// } 
// } 
// console.log(duparray); 
 
// console.log(newarray2);






// Find the sum of squares of elements in an array?
// const array=[10,212,13,34,50,100,102];
// let sumOfSquares=0;
// for (let i=0;i<array.length; i++) {
//     sumOfSquares+=array[i]*array[i]; 
// }
// console.log("Sum of squares of elements:", sumOfSquares);





//  Check if All Elements in an Array are Unique.
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 2, 3, 2, 5];
// function Unique(array) {

//     for (let i = 0; i < array.length; i++) {
//         for (let j=i+1;j<array.length; j++) {
        
//             if (array[i]===array[j]) {
//                 return false; 
//             }
//         }
//     }
//     return true; 
// }
// console.log("Array 1 is unique:",Unique(array1)); 
// console.log("Array 2 is unique:",Unique(array2)); 






//  Find the Second Largest Number in an Array.
// const array = [3,5,1,8,2,9,7];
// let largest = array[0];
// let secondLargest = array[0];
// for (let i=1; i<array.length; i++) {
//     if (array[i]>largest) {
//         secondLargest=largest;
//         largest = array[i];
//     } else if (array[i]>secondLargest && array[i]!==largest) {
//         secondLargest=array[i];
//     }
// }
// console.log("Array:",array);
// console.log("Second Largest Number:",secondLargest);





//  Cumulative Sums
// Given an array input = [3, 7, 2], create a new array where each element is the cumulative sum of elements up to that index in the original array.
// Expected Output:
// Array: [3, 10, 12]
// const input = [3, 7, 2];
// const cumulativeSum = [];
// let sum = 0;
// for (let i=0;i<input.length;i++) {
//     sum+=input[i]; 
//     cumulativeSum.push(sum);
// }
// console.log(input);
// console.log(cumulativeSum);






// Create an array of natural number upto 10  and manipulate the array with its each element multiplied by the total product of array.

// const naturalNumbers =[];
// const manipulatedArray =[];
// for (let i = 1; i <= 10; i++){
//     naturalNumbers.push(i);
// }
// let totalProduct=1;
// for (let i=0;i<naturalNumbers.length;i++) {
//     totalProduct*=naturalNumbers[i];
// }
// for (let i=0;i<naturalNumbers.length;i++) {
//     manipulatedArray.push(naturalNumbers[i]*totalProduct);
// }
// console.log(naturalNumbers);
// console.log(manipulatedArray);







// create a array of natural numbers upto 10 and create a new array having elements sum, product, avg of existing array.
// const naturalNumbers = [1,2,3,4,5,6,7,8,9,10];

// function calculateSumProductAvg(array) {
//     let sum =0;
//     let product =1;
//     for (let i=0;i<array.length;i++) {
//         sum+=array[i]; 
//         product*=array[i];
//     }
//     let avg=sum/array.length;

//     return [sum, product, avg];
// }
// const result =calculateSumProductAvg(naturalNumbers);
// console.log(naturalNumbers);
// console.log("New Array (Sum, Product, Average):",result);




// Create an array of natural numbers up to 10
// const naturalNumbers = [];
// for (let i = 1; i <= 10; i++) {
//     naturalNumbers.push(i);
// }
// console.log(naturalNumbers);







// // Write a program to replace all odd numbers with ‘*’.
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = Asterisk(array);
// function Asterisk(array) {
 
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2!==0) { 
//             array[i] = '*';
//         }
//     }
//     return array;
// }

// console.log("Modified Array :", result);








// Write a program to find the sum of all the odd numbers in an array.
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = sumOfOddNumbers(array);
// function sumOfOddNumbers(array) {
//     let sum =0;
//     for (let i = 0; i <array.length; i++) {
//         if (array[i] % 2 !== 0) { 
//             sum +=array[i]; 
//         }
//     }
//     return sum;
// }
// console.log("Sum of odd numbers:",result);







// To create a new array where each element is double the value of the original array's elements.
// const array = [1,2,3,4,5];
// const newArray =[];
// for (let i=0;i<array.length;i++) {
//     newArray.push(array[i]*2);
// }
// console.log("Original Array:",array);
// console.log("New Array:",newArray);





//  to create a new array by replacing all negative numbers with zero.
// const array = [1,-2,3,-4, 5,-6, 0];
// console.log(" Array:",array);

// function Zero(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             array[i] = 0; 
//         }
//     }
//     return array;
// }

// const result = Zero(array);
// console.log("New Array:", result);

