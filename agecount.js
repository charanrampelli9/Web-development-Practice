var age = prompt("What is your age?");
n=Math.floor(age/4);
m=age%4;
days = (1461*n)+(m*365);
//alert("Your age is nearly "+days+"days");
if(age <0){
    alert("an Error Number");
}
if(age==21){
    alert("Happy 21st birthday");
}
if(age%2==1){
    alert("Your age is odd!");
}
if(age % Math.sqrt(age)===0){
    alert("your age is perfect Square");
}