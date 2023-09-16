let num=[1,3,4,5,6,7]
"For Each Loop"
num.forEach((element)=>{
    console.log(element*element)
})

"Array.from" //Used to Create an Array from other Objects
let name="Sanket"
let arr=Array.from(name)
console.log(arr)

"for...of"//used to access the elements of array
for(let i of num){
    console.log(i)
}

"for in"// this loop access the index of an array  
for(let i in num){
   // console.log(i) // to print the index of array
    console.log(num[i]) // to print the elements of array

}