let a = document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"
console.log(a)

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background="cyan";
})