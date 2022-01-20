
// METHOD1

var btns=document.querySelectorAll('.btn');
var number=document.querySelector('h1');
let count=0;


btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    var list=e.currentTarget.classList;
    if(list.contains('inc')){
      count++;
      number.textContent=count;

    }
    else if(list.contains('dec')){
      count--;
      number.textContent=count;

    }
    else if(list.contains('reset')){
      count=0;
      number.textContent=count;
      
    }
    else{
      count=0;
      number.textContent=count;
    }
    if(count<0){
      number.style.color="red";
    }
    else if(count>0){
      number.style.color="green";
    }
    else if(count=0){
      number.style.color="black";
    }
  });
});


                          // METHOD2

// var plus=document.getElementById("inc");
// var back=document.getElementById("reset");
// var minus=document.getElementById("dec");
// var int=document.querySelector("h1");
// var integer=0;
//
// plus.addEventListener("click",function(){
//   integer++;
//   int.innerHTML=integer;
// })
//
// minus.addEventListener("click",function(){
//   integer--;
//   int.innerHTML=integer;
// })
//
// back.addEventListener("click",function(){
//   integer=0;
//   int.innerHTML=integer;
// })
