// let a = prompt("Enter your Age! ")
// a=Number.parseInt(a)
// if(a>=18){
//     alert("You are eligible to drive!");
// }
// else{
//     alert("You are not Eligible to drive any vehicle!")
// }

let Again=true;
while(Again){
let a = prompt("Enter your Age! ")
a=Number.parseInt(a)
if(a>=18){
    alert("You are eligible to drive!");
}
else if(a<1){
    console.error("Enter the valid age your age can't be Negative")
}
else{
    alert("You are not Eligible to drive any vehicle!")
    break;
}
Again=confirm("Do you want to ask again?")
}