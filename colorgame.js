// alert("Connected");
var sqr =document.querySelectorAll(".square");
var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(127, 127, 127)",
    "rgb(127, 127, 0)"
]
var easy =document.getElementById("easy");
var hard= document.getElementById("hard");

var sel = document.querySelector("#color");
var pickedColor=colors[2];
sel.textContent = pickedColor;
var bgc=document.getElementById("top");
var con = document.getElementById("conclusion");
easy.addEventListener("click",function(){
    sqr[3]
    // sqr[3].style.background="#FFFFFF";
    // sqr[4].style.background="#FFFFFF";
    // sqr[5].style.background="#FFFFFF";    
});
for(var i = 0;i<sqr.length;i++){
    sqr[i].style.background=colors[i];

    sqr[i].addEventListener("click",function(){
        var clickedcolor = this.style.background
        console.log(clickedcolor)
        console.log(pickedColor)
        if(clickedcolor == pickedColor){
            for(var j=0;j<sqr.length;j++){
                sqr[j].style.background= pickedColor;
            }
            bgc.style.backgroundColor= pickedColor;
            con.textContent="Correct!";
            var tab = document.getElementById("column");
            tab.style.background=pickedColor;
        }
        else{
            this.style.background = "#FFFFFF";
            con.textContent="Wrong!";
         }
    });
}
