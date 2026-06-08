// -- Find the Factorial of a Number


// -- Find the Nth Fibonacci Number

// let n = 10;

// const fibo= (n)=>{
//  if(n <= 1){
//     return n
//  }

//  return fibo(n-1)+fibo(n-2)
// }

// // for print seris
// for(let i = 0;i < n;i++){
//     console.log(fibo(i))
// }

// -- Calculate the Sum of First N Natural Numbers

// const sumOfN = (n)=>{
//     if(n==0){
//         return 0
//     }
//     return n +sumOfN(n-1)
// }
// console.log(sumOfN(10))

// -- Reverse a String Using Recursion

// let str = "hello";
// const rev = (str)=>{
//     let arr = str.split("");

//     let l = 0;
//     let r = arr.length-1;
//     while(l < r){
//         [arr[l],arr[r]]=[arr[r],arr[l]]
//         l++,
//         r--
//     }
//     return arr.join("");
// }

// console.log(rev(str), '*** *** => rev(str)');


// -- Check Whether a String is a Palindrome


// let str = "mad9am"

// const isPalindrome=(str)=>{

//     let arr = str.split("");

//     let l = 0;
//     let r = arr.length-1;
//     while( l < r){
//      [arr[l],arr[r]]= [arr[r],arr[l]]
//      l++;
//      r--;
//     }

//   return arr.join("")=== str
// }

// console.log(isPalindrome(str))

// -- Calculate xⁿ (Power Function)

// const power=(x,n)=>{
//     if(n==0){
//         return 1
//     }

//     return x*power(x,n-1)
// }

// console.log(power(2,3))




// -- Find the Sum of Digits of a Number

//     const sumOfDigits=(n)=>{
//     if(n==0){
//         return 0
//     }

//     let lastDigit=n%10;

//     return lastDigit+sumOfDigits(Math.floor(n / 10))
//     }

// console.log(sumOfDigits(123))

// -- Count the Number of Digits in a Number

// const countNumber = (n) => {

//     if (n === 0) {
//         return 0;
//     }
// console.log(countNumber(Math.floor(n / 10)), '*** *** => countNumber(Math.floor(n / 10))');

//     return 1 + countNumber(Math.floor(n / 10));
// }

// console.log(countNumber(123))


// -- Find the Greatest Common Divisor (GCD) of Two Numbers

// const GCD = (a,b)=>{
//     let x = a;
//     let y =b;

//     while(y!==0){
//         let rem = x%y;
//         x = y;
//         y = rem
//     }

//     return x

// }

// console.log(GCD(10,20))

// // by recurions
// const gcd = (a, b) => {

//     if (b === 0) {
//         return a;
//     }

//     return gcd(b, a % b);
// }

// console.log(gcd(10,20))


// -- Convert a Decimal Number to Binary

// -- Print Numbers from 1 to N

// const OneToN = (n) => {
//     if (n === 0) {
//         return;
//     }

//     OneToN(n - 1)
//     console.log(n)

// }

// console.log(OneToN(10), '*** *** => OneToN(10)');


// -- Print Numbers from N to 1

// const NToOne = (n) => {
//     if (n === 0) {
//         return;
//     }

//     console.log(n)

//     NToOne(n - 1)

// }

// console.log(NToOne(10), '*** *** => OneToN(10)');

// -- Find the Sum of Elements in an Array

// const sumOfArrEl=(arr,index=0)=>{
//     if(index===arr.length){
//         return 0;
//     }
//     return arr[index]+sumOfArrEl(arr,index+1)
// }

// console.log(sumOfArrEl([1,2,3,4]))

// -- Find the Maximum Element in an Array

// const findMax = (arr)=>{
//     let max= arr[0];
//     for(let i = 0;i <  arr.length;i++){
//         if(arr[i] > max){
//             max=arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax([2,3,4,5,7,8]))

// -- Find the Minimum Element in an Array


// const findMin = (arr)=>{
//     let min= arr[0];
//     for(let i = 0;i <  arr.length;i++){
//         if(arr[i] < min){
//             min=arr[i]
//         }
//     }
//     return min
// }

// console.log(findMin([2,3,4,5,7,8]))

// -- Check if an Array is Sorted

const isSorted = (arr)=>{
  
 for(let i = 1 ;i <=0;i++){
     if(arr[i] < arr[i-1]){
        return true
     }
 }
 return 

}


// -- Reverse an Array





