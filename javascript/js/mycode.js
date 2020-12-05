// document.getElementById("button").onclick=function(){
//     document.getElementById("confirm").innerHTML="order placed. check email for confirmation";
//     document.getElementById("button").style.display="none";
// }
// code above is for simple inweb application.
//------------------------------------------------------------------------------


// var username=prompt(); //variable name
// // alert(username); //variable name

// console.log(username);
//-----------------------------------------------------------------------------

// (function(){
// // iife-immediately invoke function expression( make our variable unaccesible from window)
// var age=5;
// })();

// let content="\t \t\t\t\ntoday we will learn abbout string method and how fun they are";
// console.log(content.substring(6,11));
// console.log(content.substr(6,11));
// console.log(content.slice(6,11));

// //how to modify string
// console.log(content.toUpperCase()); 
// console.log(content.trim());
// console.log(content.toLowerCase());
// console.log(content.split(" "));
// console.log(content.search());
// console.log(content.replace());

// let waiting="tick tock";
// console.log(waiting.repeat(10));#
// --------------------------------------------------------------------


// {
//     let position={
//         //property
//         x:10,
//         y:20,
//         //add method
//         print: function(){
//             console.log(`X: ${this.x}, Y: ${this.y}`);//the value of this depend on the object in the parenthesis.
//         }
//     }

//     let myPosition=position;
//     console.log(position);
//     console.log(myPosition);
//     position.print();
// }
//---------------------------------------------------------------------

// {
//     var name=prompt();
//     if(name==="tam"){
//         //three equal sign= identity operator or strict equality
//         console.log("welcome tamtam!");

//     }
//     else if(name==="tamtam"){
//         console.log("welcome lord tamtam")
//     }
//     else{
//         console.log("who are you?");
//     }
// }
//---------------------------------------------------------------------

// {
//     //switch statement
//     let name=prompt("what is your name?");
//     switch(name){
//         case"Tam":
//             console.log("welcome");

//         break;
//         case"yah":
//         console.log("hai sayang");
//         break;

//         default:
//         console.log("welcome");
//         break;
//     }

// }
// --------------------------------------------------------------------

//ternary operator
// {
//     let name=prompt("what is your name?");
//     5+5 //binary operator
//     let point= name==="tam" ? 10 : 0;
//     name==="yah" ? console.log("10"):console.log("0");
//     console.log(point);
// }
//---------------------------------------------------------------------

//loop
// initialization
// condition
// update

// let i =0;this is initialization
// while(i<10)this is condition{
//     //code
//     i++;this is update
// }

// for(let i=0, i<10, i++){
//     //code
// }
// let i=1000; //do loop

// do{
// console.log(i);
// i++;
// }while(i<10);

// {
//     let password;
//     do{
//         password=prompt("what is the password?");


//     }while(password.toLowerCase() !=="hello");
// }

// let list=[1,5,6,7,98,7,6,4,5,7];
// for(let i=0; i<list.length; i++){
//     console.log(list[i]);
// }

// let words="search this string mon";
// let character="s";
// for(let i=0; i<words.length;i++){
//     if(words[i]===character){
//         console.log(words[i] + " is found at index "+i);
//     }
    
// }
// --------------------------------------------------------------------

// /search algorithm

// let words="search this string mon";
// // let character="s";
// for(let i=0; i<words.length;i++){
//     if(words[i]==='a'|| words[i]==='o'){
//         continue;
        
//     }
//     console.log(words[i]);
    
    
// }
// let d=document.getElementById("hello");

// {
//     //nested loop
//     //pyramid
//     for(let i=0; i<10;i++){
//         for(let k=i;k>=0;k--){
//             d.append(k+" ");
//         }
//         var br= document.createElement('br');
//         d.appendChild(br);
//     }

   
// }
// -------------------------------------------------------------------

//using array

// {
//     let grades=[]
//     grades[0]=12;
//     grades[1]=12;
//     grades[49]=12;
//     console.log(grades);
//     grades.length=300;
//     grades[350]=12;

//     for(let i=0;i<grades.length;i++){
//         console.log(grades.length);
//     }
// }

// {
    
//     let grades=[12, 213, 15, 1251241,  142124, 123, 123];
//     grades.length=30;
//     grades[34]=40;

//     let search=213;

    
//     for(let i=0;i<grades.length;i++){
//        if(grades[i]===search){//skip undefined
        
//            console.log(grades[i] + " at index " + i);
//        }

//     }

// }
// {//find the largest value in array
    
//     let grades=[12, 213, 15, 1251241,  142124, 123, 123];
//     grades.length=30;
//     grades[34]=40;

//     let largest=grades[0];

//     for(let i=0;i<grades.length;i++){
//        if(grades[i]>largest){//skip undefined
        
//          largest=grades[i];
//          console.log(grades[i]+" at the index "+i);

//        }

//     }
   

// }
// {//average
    
//     let grades=[12, 213, 15, 1251241,  142124, 123, 123];
//     grades.length=30;
//     grades[34]=40;

// let count=0;
// let total=0;
//     for(let i=0;i<grades.length;i++){
//        if(grades[i]!==undefined){
//         count++;
//         total +=grades[i];

//        }

//     }
   
//     avg=total/count;
// console.log(avg);
// }


//fill array from unser input
// {
//     let grades=[];

//     while(true){
//         let input=prompt("add your grade");
//         if(input==="q" || input===null){
//             break;
//         }
//         grades.push(Number(input));
//         console.log(grades);

//     }
// }

//Array method
// {
//     let grades=[];
//     grades.pop();

// }
//---------------------------------------------------------------------

// {
//     let grades=[12, 123, 12.3 , 41241231, 123123, 112, 123, 1 ];
//     grades.length=30;
//     // for (let i=0; i< grades.length;i++){
//     //     if(grades[i]!==undefined)
//     //     console.log(grades[i]);
//     // }
//     grades.forEach(function(element){
//         console.log(element);})
    
// }
//--------------------------------------------------------------------

// {
//     let grades=[
//         [12, 13, 14], [13, 15, 16], [13,167, 78]
//     ];

//     // for(let i=0; i<grades.length; i++){
//     //     for(let k=0; k<grades[i].length;k++){
//     //         console.log(grades[i][k]);
//     //     }

//     // }
//     grades.forEach(
//         function(element){
//             console.log(element);
//         }
//     );
// }

//---------------------------------------------------------------------

// var valentine=new Date();
// console.log(valentine);

// {
//     let myDate=new Date(2020, 11);
//     console.log(myDate);
// }

//---------------------------------------------------------------------

//function

// function square(x){
//    //code
    
// }
// {
//     function pow(x, y){ //parameter
//         let total =1;
//         for(let i =0;i<y;i++){
//             total*=x;
//         }
//         return total;
//     }
//     console.log(pow(3,3));//argument
// }
//---------------------------------------------------------------------

//hoisting

//let and const not global
//var is global

//function dostuff(){
    //console.log("things");//function declaration
//}

//var x=function(){} //function expression

// var x;
// console.log(x);
//  x =10;
// doStuff();

//  function doStuff(){
//      console.log("hey");
//  }

// {
//     let me={
//         name:"tam",
//         outPutMe:function(){
//             console.log(this);
//         }
//     };
//     me.outPutMe();//method
// }

//---------------------------------------------------------------------
//debugging

// {
//     function fact(x){
//         let total=5;
//         for(let i=x-1;i>1;i--){
           
//             total*=i;
//         }
//         return total;

//     }
//     console.log(fact(5));
// }
