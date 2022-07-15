arr = [1,1,3,4,5,6,10,3,4];//prompt("Enter the array");
choose = prompt("choose function on array");

function reversearr(arr){
    arr.reverse();
    // arr.forEach(function(index){
    //    alert(index);
    //  });
    alert(arr);
}

function IsUniform(arr){
    var i=1;
    var s = 1;
    while(s<=1 && i<arr.length){
        if(arr[i] != arr[0]){
            alert("Non-Uniform");
            s=s+1;  
        } 
        i+=1;
    }
    if(s == 1){
         alert("Uniform");
    }
    // else {
    //     alert("Uniform");
    // }
}

function sum(arr){
    sum1=0;
    for(var i =0;i<arr.length;i++){
        sum1+=arr[i];
    }
    alert(sum1);
}

function maxi(arr){
    max=arr[0];
    for(var i =1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    alert(max);
}

if(choose == 1){
    reversearr(arr);
}
else if(choose == 2){
    IsUniform(arr);
}
else if(choose == 3){
    sum(arr);
}
else if(choose == 4){
    maxi(arr);
}





