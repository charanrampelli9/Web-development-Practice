var button = document.querySelector("button");
var paragraph = document.querySelector("p");
button.addEventListener("click",function(){
    if(document.body.style.background == "blue"){
        document.body.style.background="white";
    }
        
    else{
        document.body.style.background="blue";
    }     
});
// button.addEventListener("click", function() {
//     paragraph.textContent = "Someone Clicked the Button!";
//   });