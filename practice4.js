"Problem 1"
// let n= prompt("Enter the number")
// let arr=[2,3,45,5]
// n=Number.parseInt(n)
// arr.push(n)
// console.log(arr)

"Problem 2"
let arr=[2,3,45,5,20]
let n
do{
// let n= prompt("Enter the number")
n=Number.parseInt(n)
arr.push(n)
}while(n!=0);
console.log(arr)

"problem 3"
let a= arr.filter((a)=>{
    return a%10==0;
})
console.log(a)

"problem 4"

arr.forEach(element => {
    console.log(element*element)
});