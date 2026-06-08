//Input : 45678 % /
//Output->5

// let num = 45678;
// let count = 0;

// while (num > 0){
//     num = Math.floor(num/10);
//     count++;
// }

// console.log(count);


//Input: 1234
//Out: 4321
// lastDigit = num % 10;
// rev = rev*10 + lastDigit
// num = num /10

// let num = 121;
// let original = num;
// let rev = 0;

// while(num > 0){
//     let lastDigit = num % 10;
//     rev = rev *10 +lastDigit;
//     num = Math.floor(num/10);
// }
// if( original === rev){
//     console.log("P");
// }else{
//     console.log("NP"); 
// }
// // console.log(rev);

//GCD- gREATER common Divior
// Number: 12 ,18
// CD: 1,2,3,6
//GCD:6

//LCM-Least Common Muliplier
//Muliply of 12: 12,24,36
//Muliple of 18: 18,36
//LCM :36

//Euclieran Alogoritm
// GCD(a,b)=GCD(b,a%b) b= 0 na ho jye

// let x = 12;
// let y = 18;
// //GCD lOGIC
// let a = x;
// let b = y;
// while(b !== 0){
//     let rem = a%b;
//     console.log(rem,"rem")
//     a= b;
//     console.log(a,"a")
//     b = rem;
//     console.log(b,"b")
// }
// console.log("GCD IS", a);
// let gcd = a;
// let lcm = (x*y)/gcd;
// console.log(lcm);


// LCM(A,B)= (A*B)/gcd(a,b)


// 1. Find the GCD (HCF) of 48 and 72.

//  let a = 48;
//  let b = 72;
//  let x = a;
//  let y = b;

//  while(b!== 0){
//     let rem = a % b;
//     a=b;
//     b=rem;
//  }
// console.log(a,"GCD")  //24


// 2. Find the LCM of 18 and 24.

//  let a = 18;
//  let b = 24;
//  let x = a;
//  let y = b;

//  while(b!==0){
//     let rem = a%b;
//     a =b;
//     b=rem
//  }

//  let GCD = a;
//  let LCM = (x*y)/GCD
//  console.log(LCM,"LCM")


//  3. Find the GCD and LCM of 36 and 60.

//  let a = 36;
//  let b = 60;
//  let x = a;
//  let y = b;

//  while(b!==0){
//     let rem = a%b;
//     a =b;
//     b=rem
//  }

//  let GCD = a;
//  let LCM = (x*y)/GCD

//  console.log(GCD,"GCD");
//  console.log(LCM,"LCM");

// 5. Reverse the number 123456.

// let n = 123456;
// let rev=0;

// while(n!==0){
//     let lastDigit = n%10;
//     rev = rev*10+lastDigit;
//     n = Math.floor(n/10);
// }
// console.log(rev,"reverse")

// 6. Check whether 1221 is a palindrome number.

// let n = 1221;
// let rev = 0;
// let originalNumber = n;

// while (n !== 0) {
//     let lastDigit = n % 10;
//     rev = rev * 10 + lastDigit;
//     n = Math.floor(n / 10);
// }
// if (rev === originalNumber) {
//     console.log(true)
// } else {
//     console.log(false);
// }

// console.log(rev, "reverse")

// 7. Find the sum of digits of 9875.

// let n = 9875;
// let sum = 0;

// while(n !== 0){
//     let lastDigit = n%10;
//     console.log(lastDigit,"lastDigit")
//     sum+=lastDigit;
//     n = Math.floor(n/10)
// }
// console.log(sum,"total sum")


// Find the number of digits in 123456789.

// let n = 123456789;
// let count = 0;

// while(n!==0){
//     let lastDigit = n%10;
//     count++;
//     n = Math.floor(n/10)
// }

// console.log(count,"count");


// 101 is prime 
// const isPrime = (num) => {
//   if (num < 2) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(isPrime(101));



// let n = 12345

// let count = 0;

// for(let i = 0 ; i < n.length;i++){
//     count++;
//     n = Math.floor(n/10)
// }

// console.log(n)

// reverse number

// let rev = 0;

// while(n > 0){
// let lastDigit = n%10;
//    rev = rev*10 + lastDigit;
//    n = Math.floor(n/10);
// }

// console.log(rev,"rev")


// amstrong number

// let n = 15;
// let temp = n;
// let sum = 0;

// while(temp > 0 ){
//   let lastDigit = temp % 10;
//   sum=sum+(lastDigit*lastDigit);
//   temp = Math.floor(temp/10);
// }

// console.log(sum===n)

// prime count

// let n = 10;
// let count = 0;
// let primeNumbers = ""

// for (let num = 2; num <=n; num ++){
//     let isPrime = true;
//     for(let i = 2 ; i*i <= num;i++){
//        if(num%i===0){
//         isPrime=false;
//         break
//        }
//     }
//     if(isPrime){
//       Number(primeNumbers+=num)
//       count++
//     }
// }

// console.log(count)
// console.log( primeNumbers)

// Prime range 

// let l = 20;
// let r = 30;

// for(let num = l ; num <= r; num++){
//    let isPrime = true;
//    if( num < 2){
//     isPrime = false;
//    }

//    for(let i = 2; i*i <= num ;i++){
//     if(num%i === 0 ){
//       isPrime = false;
//       break
//     }
//    }
//    if(isPrime){
//     console.log(num)
//    }
// }



//  factorial by math 


// let n = 5;
// let fact = 1;

// for(let i = 1;i <= n;i++){
//     fact*=i
// }
// console.log(fact)

// by while loop 

//  while( n!==0){
//    fact*=n;
//    n--
//  }
//  console.log(fact)


// sum of all factors 
// let n = 12;
// let sum = 0;

// for(let i = 1; i*i < n;i++){
//    if(n%i===0){
//     sum+=i

//     if(i!==n/i){
//       sum+=n/i
//     }
//    }
// }

// console.log(sum,"sum")


// let n = 60;

// for(let i = 2; i * i <= n; i++){

//     while(n % i === 0){

//         console.log(i);
        
//         n = n / i;
//     }
// }

// if(n > 1){
//   console.log(n, '*** *** => 2n');
  
//     console.log(n);
// }

// trailing zero 

let n = 700;
let count = 0;

while( n!==0){
  n = Math.floor(n/5);
  count+=n
}

console.log(count,"count")

