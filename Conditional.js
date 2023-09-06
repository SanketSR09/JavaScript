let a= prompt("Enter your age");
a= Number.parseInt(a);
// console.log(typeof a);

if(a<0){
    alert("This is a Invalid Age");
}
else if(a<9){
    alert("you are a KID!")
}
else if(a<18 && a>=9){
    alert("YOu can think of driving after 18 ")
}
else{
    alert("This is not valid age")
}