
var button_drums=document.querySelectorAll(".drum");

        
for(var i=0;i<button_drums.length;i++){

    button_drums[i].addEventListener("click",function (){

     var buttoninnerhtml=this.innerText;

     playsound( buttoninnerhtml);

     addAnimation(buttoninnerhtml);

    });
}

document.addEventListener("keydown",fun);

function fun(e){
    playsound( e.key);

    addAnimation(e.key);
}






function playsound(char){

    switch (char) {
        case "a":
              var snare=new Audio("sounds/snare.mp3");
              snare.play();
              break;
        case "s":
             var tom1=new Audio("sounds/tom-1.mp3");
             tom1.play();
              break;
       
         case "d":
             var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;

          case "f":
             var tom3=new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;

          case "j":
              var tom4=new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;  
              
          case "k":
              var crash=new Audio("sounds/crash.mp3");
              crash.play();
               break;  
         case "l":
           var kick=new Audio("sounds/kick-bass.mp3");
           kick.play();
            break;

      default:
          console.log(this.innerHtml);
          break;
  }

}

function addAnimation(element){
 
    var querry="."+element;
   var selectedElement= document.querySelector(`${querry}`);
        selectedElement.classList.add("pressed");

        setTimeout(function(){
            
            selectedElement.classList.remove("pressed");
        },100);
}