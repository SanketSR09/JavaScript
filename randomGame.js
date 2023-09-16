const a = Math.floor(Math.random() * 100) + 1;
//console.log(a);
let score =100
for (let i = 1; i < score; i++) {
    score =score-1;
  let b = prompt("Enter the Correct number");
  b = Number.parseInt(b);
  if (b > a) {
    console.log("Your Entered Number is :" ,b);
    console.log("The Number you Guessed is Greater ");
  } else if (b < a) {
    console.log("Your Entered Number is :" ,b);
    console.log("The Number you Guessed is lesser.");
  } else if (b == a) {
    console.log("Your Entered Number is :" ,b);
    console.log(`You guessed the Correct Number in : ${100-score} Chances` );
    break;
  } 
}

