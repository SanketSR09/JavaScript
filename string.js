let name="Sanket";
let name1="                                        Sanket                                 ";
console.log(name.length)

let a1= "Sanket"
let a2="Brownie"

let Sentence=`${a1} is best Friend of ${a2}.`
console.log(Sentence)

"Template literals"
let n= "bana\"na" // (\") possess single index
console.log(n)
console.log(n.length)

"Methods"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2))
console.log(name.slice(2,4))
console.log("Trim method",name1.trim())

let n1="Sanket Rangari"
let newName = n1.replace("Sanket","Sankita");
let newName1 = n1.replace("ket","kita");
console.log(newName)
console.log(newName1)

console.log(name.concat(" loves ", a2))

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])

//example
str="Please give me rs 1000"
amount=Number.parseInt(str.slice("Please give me rs ".length))
console.log(amount)
console.log(typeof amount)