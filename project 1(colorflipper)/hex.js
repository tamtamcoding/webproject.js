const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.getElementById("btn");
const colors=document.querySelector(".color");

btn.addEventListener("click", function(){
let hexColor="#";
for(let i=0;i<6;i++){
    hexColor+=hex[getRandomnumber()];
}


colors.textContent=hexColor;
// document.body.style.backgroundColor=hexColor;
document.body.style.background=hexColor;
});

function getRandomnumber(){
    return Math.floor(Math.random() * hex.length);
}
