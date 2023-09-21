let user= prompt("Enter S, W or G");
user= user.toUpperCase();
let CpuI= Math.floor(Math.random()*3);
let cpu=["S","W","G"][CpuI]

const match= (Cpu,user)=>{
    if (Cpu === user){
        return "Match tied";
    }
    else if(cpu == "S" && user == "W"){
        return "Cpu Wins";
    }
    else if(cpu == "S" && user == "G"){
        return "User Wins";
    }   
    else if(cpu == "W" && user == "S"){
        return "User Wins";
    } 
    else if(cpu == "W" && user == "G"){
        return "Cpu Wins";
    }
    else if(cpu == "G" && user == "W"){
        return "User Wins";
    }
    else if(cpu == "G" && user == "S"){
        return "Cpu Wins";
    }
}
let result=match(cpu,user)
console.log("The winner is :"+result)
document.write(`\n Cpu is ${cpu} and Useer is ${user} \nThe winner is : ${result}`)