console.log("OPerators in JS");
let a=10;
let b= 4;

console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a%b)
console.log(a*b)
console.log(a**b)

"increment decrement operator"

console.log(++a)//11
console.log(a++)//12 11
console.log(--a)//11
console.log(a--)//11
console.log(a)//10
console.log(a--)//10 9
// console.log(a++) //55 post increment : means the value will be incremented after words.
// console.log(++a)//56  pre increment: means the value will be incremented before i.e. the incremented will be shown immediately.

"Assignment Operators"

let Assignment=5;
Assignment+=5;
console.log(Assignment)
Assignment-=5;
console.log(Assignment)
Assignment*=5;
console.log(Assignment)
Assignment/=5;
console.log(Assignment)

"Comparison Operators"

let a1=4;
let a2=5;
console.log(a1==a2)
console.log(a1!==a2)
console.log(a1===a2)  
console.log(a1!==a2)
console.log(a1<a2)
console.log(a1>a2)

"Logical Operators"

let x= 10;
let y= 12;

console.log(x<y && x==10);
console.log(x>y || x==10);
console.log(!false);

"ternary operator"

let age =prompt("Enter the age");

age = age>18 ? "you can Drive" :" You cannot Drive"

alert(age)