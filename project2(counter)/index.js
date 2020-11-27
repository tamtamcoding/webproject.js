let count=0;

const value=document.querySelector(".value");
const countbtn=document.querySelectorAll("#btn");

countbtn.forEach(function(btn){
    btn.addEventListener("click", function(hurrrah){
        let styles=hurrrah.currentTarget.classList;
        if(hurrrah.currentTarget.classList.contains("decrease")){ //can be alternative callback
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count=0;
        }

        if(count>0){
            value.style.color="blue";

        }
        if(count<0){
            value.style.color="red";
        }
        if(count===0){
            value.style.color="black";

        }
         value.textContent=count;
    });
});