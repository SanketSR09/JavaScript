let a=["Sanket","Ritesh","Puja","Krishna","Aniket","Toshik","Bhumika"];
console.log(a);

let details=["Sanket",1,true];
details[3]=8.89 //value added to the array at 3rd Index
console.log(details[0])
console.log(details[1])
console.log(details[2])
console.log(details[3])//undefined because index 3 doews not exist
console.log(details.length)
console.log(typeof details)

// for (let i=0; i<details.length;i++){
//     console.log(details[i])
// }

for (let i=0; i<a.length;i++){
    console.log(a[i])
}

"Array Methods"

"toString Method"
let num=[ 1, 2, 3, 4]
let b= num.toString();
console.log(b)
console.log(typeof b)

"join Method"

let c=num.join("-")
console.log(c, typeof c)

"pop method"
// r=num.pop()
// console.log(num) // r returns the popped element

"push method"
// let p=num.push("Rangari")
// console.log(p,num)// returns the new array length

"shift method"
// let s=num.shift()
// console.log(s,num)//returns the new updated array and the element removed

"unshift method"
let us=num.unshift()
console.log(us,num)// add the element into the array and returns the added element

"delete method"
let num1 =[1,2,3,4,5,6,7]
console.log(num1.length)//7
delete num1[0]
console.log( num1.length)//doesnt affect the length of array it will be as it is 7

"concate method"
// num2=num.concat(num1)
let num3 = [11,12,13,14,15,16]
num2 = num.concat(num1,num3)
console.log(num2)
console.log(num2.length) //11

"sort method"
 
let n=[3,546,89,58,352,896,1,7,0]
n.sort()
console.log(n)// it sort the array in numerical order it will print all the elements starting from the element least element.

let compare=(a,b)=>{
    //  return a-b //for sorting it in ascending order
    return b-a// for sorting it in descending order
}
n.sort(compare)
console.log(n)