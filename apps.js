const colors=["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random numebr between 0 and 3

    const randomNumber=getRandomnumber();
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent=colors[randomNumber];

});

function getRandomnumber(){
    return Math.floor(Math.random() * colors.length);
}

