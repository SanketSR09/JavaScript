let arr=[7,9,11,5,10,13]
"Map Method"
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1;
});
console.log(a)


"Filter Method" // it returns the values which satisfies the condition.
let a1=arr.filter((a)=>{
    return a<10
})
console.log(a1) //7,9,5

"Reduce method"
arr1=arr.reduce((h1,h2)=>{ //in this method it add all the element one after another and so on till the last element like 7+9=16 -> 16+11=27 -> 27+5=32 -> 32+10=42 -> 42+13=55
    return h1+h2
})
console.log(arr1)

"also"
const reduce_array=((h1,h2)=>{
    return h1-h2
})
let arr2=arr.reduce(reduce_array)
console.log(arr2)

