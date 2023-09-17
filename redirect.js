let a =prompt("Enter a number")
a=Number.parseInt(a)
if(a>4){
    location.href="https://www.google.com"
}
else{
    alert("The number you entered is less than 4")
}

let b= prompt("Enter the color of background")
document.body.style.background=b