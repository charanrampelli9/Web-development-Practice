// alert("Connected");
function generateRandomColor(len){
    var s=[];
    for(var i=0;i<len;i++){
        var rgb1 = Math.floor(Math.random()*256);
        var rgb2 = Math.floor(Math.random()*256);
        var rgb3 = Math.floor(Math.random()*256);
        s[i]= "rgb("+rgb1+", "+rgb2+", "+rgb3+")"
    }
    return s ;
}
function button_change(){
    easy.style.backgroundColor=" #faebd7"
    hard.style.backgroundColor=" #faebd7"
    medium.style.backgroundColor="#faebd7"
    easy.style.color=" rgb(5, 5, 174)";
    medium.style.color=" rgb(5, 5, 174)";
    hard.style.color=" rgb(5, 5, 174)";
    bgc.style.backgroundColor= " rgb(5, 5, 174)";
}
function colorchange(color,len){
    for(var j=0;j<len;j++){
        sqr[j].style.background= color;
    }
}
function choosecolor(){
    var random = Math.floor(Math.random()*colors.length);
    console.log(colors[random],random);
    return colors[random];
}

var sqr =document.querySelectorAll(".square");
var colors = []
var pickedColor;
// console.log(colors)
var easy =document.getElementById("easy");
var medium =document.getElementById("medium");
var hard= document.getElementById("hard");

var sel = document.querySelector("#color");
var reset =document.querySelector("#restart");

// console.log(pickedColor);

var bgc=document.getElementById("top");
var con = document.getElementById("conclusion");
// bgc.style.backgroundColor= generateRandomColor(1);

// easy.style.backgroundColor="rgb(255,255,255)"  

easy.addEventListener("click",function(){
    var sqrno =3
    button_change();
    con.textContent="Start!";
    easy.style.backgroundColor="rgb(5, 5, 174)"
    easy.style.color="#faebd7";
    colors=generateRandomColor(3);
    pickedColor=choosecolor();
    sel.textContent = pickedColor;
    for(var j=3;j<9;j++){
        sqr[j].style.background="rgb(18, 17, 17)" ;
    } 
    for(var i = 0;i<3;i++){
        sqr[i].style.background=colors[i];
    
        sqr[i].addEventListener("click",function(){
            // sqr[i].style.background=colors[i];
            var clickedcolor = this.style.background
            console.log(clickedcolor);
            if(clickedcolor == pickedColor){
                
                bgc.style.backgroundColor= pickedColor;
                con.textContent="Correct!";//giving message of correct
                reset.textContent="Play Again?";
                colorchange(pickedColor,3);
                for(var j=3;j<9;j++){
                    sqr[j].style.background="rgb(18, 17, 17)" ;
                }
                // var tab = document.getElementById("column");
                // tab.style.background=pickedColor;
            }
            else{
                // deleting the square
                this.style.background = "rgb(18, 17, 17)";
                con.textContent="Wrong!";
             }
             
        });
    } 
    reset.addEventListener("click",function(){
        bgc.style.backgroundColor= "rgb(5, 5, 174)";
        con.textContent="Start!";
        colors=[]
        easy.click()
        
    });
    
});


medium.addEventListener("click",function(){
    var sqrno =6
    button_change();
    con.textContent="Start!";
    medium.style.color="#faebd7";
    medium.style.backgroundColor="rgb(5, 5, 174)"
    colors=generateRandomColor(6);
    pickedColor=choosecolor();
    sel.textContent = pickedColor;
    for(var j=6;j<9;j++){
        sqr[j].style.background="rgb(18, 17, 17)" ;
    } 
    for(var i = 0;i<6;i++){
        sqr[i].style.background=colors[i];
    
        sqr[i].addEventListener("click",function(){
            
            var clickedcolor = this.style.background
            console.log(clickedcolor);
            if(clickedcolor == pickedColor){
                
                bgc.style.backgroundColor= pickedColor;
                con.textContent="Correct!";//giving message of correct
                reset.textContent="Play Again?";
                colorchange(pickedColor,6);
                for(var j=6;j<9;j++){
                    sqr[j].style.background="rgb(18, 17, 17)" ;
                }
            }
            else{
                this.style.background = "rgb(18, 17, 17)";
                con.textContent="Wrong!";
             }
             
        });
    } 
    reset.addEventListener("click",function(){
        bgc.style.backgroundColor= "rgb(5, 5, 174)";
        con.textContent="Start!";
        colors=[]
        medium.click()
        
    });
    
});
hard.addEventListener("click",function(){
    button_change();
    con.textContent="Start!";
    hard.style.backgroundColor="rgb(5, 5, 174)"
    hard.style.color="#faebd7";
    // bgc.style.backgroundColor= generateRandomColor(1);
    var sqrno =9;
    colors=generateRandomColor(9);
    
    
    pickedColor=choosecolor();
    sel.textContent = pickedColor;
    for(var i=0;i<9;i++){
        sqr[i].style.background=colors[i];
    }
    // bgc.style.backgroundColor= generateRandomColor(1);
    reset.textContent="NEW COLORS";
    pickedColor=choosecolor();
    sel.textContent = pickedColor;
    // clicked();

    for(var i = 0;i<sqr.length;i++){
    sqr[i].style.background=colors[i];
    sqr[i].addEventListener("click",function(){
        var clickedcolor = this.style.background
        console.log(clickedcolor);
        console.log(pickedColor);
        if(clickedcolor == pickedColor){
            colorchange(pickedColor,sqrno);
            bgc.style.backgroundColor= pickedColor;
            con.textContent="Correct!";//giving message of correct
            reset.textContent="Play Again?";
        }
        else{
            // deleting the square
            this.style.background = "rgb(18, 17, 17)";
            con.textContent="Wrong!";
        }
    });
    }
    reset.addEventListener("click",function(){
        bgc.style.backgroundColor= "rgb(5, 5, 174)";
        con.textContent="Start!";
        colors=[]
        hard.click()
        
    });
          
});
