var button = document.querySelectorAll("button");
var inputnum = document.querySelector("input");
var maxscore = document.querySelector("p span");
var ws=5
inputnum.addEventListener("change",function(){
    maxscore.textContent = inputnum.value;
    ws = inputnum.value; 
    reset();
})

var p1display = document.getElementById("p1.D");
var p2display = document.getElementById("p2.D");
var p1=0,p2=0;

button[0].addEventListener("click",function(){
    if(p1<ws && p2<ws){
        p1++;
        p1display.textContent = p1; 
        if(p1==ws){
            p1display.style.color="green"
        }  
    }
    
})
button[1].addEventListener("click",function(){
    if(p2<ws && p1<ws){
        p2++;
        p2display.textContent = p2; 
        if(p2==ws){
            p2display.style.color="green"
        }  
    }
})
button[2].addEventListener("click",function(){
    reset();
})
function reset(){
    p2=0,p1=0;
    p2display.textContent = p1;
    p2display.style.color="black"
    p1display.style.color="black"
    p1display.textContent = p1;
}