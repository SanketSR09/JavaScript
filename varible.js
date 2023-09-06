console.log("Hellow world!");
// Don't use var because this can throws the error because it can be updated and redeclared.
// const neither updated nor redeclared.
// let can be updated but cannot redeclared.
const a= 1;
// const a=2;// throws error.
let b= 3;
let c= 3;
{
    let a= 4;
    console.log(a);
}
b= 2;//updated.

console.log(a);
console.log(b);//2 will be the output.
