 let count=0;
function changeColor(){

  var bg=document.querySelector(".top-container");
  var bb=document.querySelector("nav");
  if(count%2==0){

  bg.style.backgroundColor="#D6D5A8";

}

else if(count%2!=0){
  bg.style.backgroundColor="#E4F4F3";

}
count++;

}
document.querySelector(".b1").addEventListener("click",function(){
  window.scrollTo({
    top: 750,
   left: 100,
   behavior: 'smooth'
  })

});
