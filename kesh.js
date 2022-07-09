 let count=0;
function changeColor(){

  var bg=document.querySelector(".top-container");
  if(count%2==0){

  bg.style.backgroundColor="#A1DBF1";
}

else if(count%2!=0){
  bg.style.backgroundColor="#E4F4F3";

}
count++;

}
