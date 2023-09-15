let prac = {
  Sanket: 90,
  Brownie: 100,
  Sankita: 98,
};
for (const val in prac) {
  if (prac.hasOwnProperty.call(prac, val)) {
    const element = prac[val];
    console.log("The marks of " + val + " is " + element+".");
  }
}

for (let key in prac){
    console.log("THe marks of "+key+" is "+ prac[key] +".")
}

"problem2"
let cn=9;
 let yn=prompt("Guess the Correct Number");

if(cn==yn){
    console.log("You Guessed the Correct number");
}
else{
    console.log("Try Again")
}

"continue the loop until we guess the correct number"
let i 
while(i != cn){
    i=prompt("Enter the number")
}
console.log("You guessed the right number")

"Mean of 5 number"

let mean=(a,b,c,d,e)=>{
  return (a+b+c+d+e)/5
}
let m=mean(3,4,5,6,7)
console.log(m)
