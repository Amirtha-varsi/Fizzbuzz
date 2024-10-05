let start=parseInt(prompt("Enter the start limit"));
let end=parseInt(prompt("Enter the end limit"));
for(let i=start;i<end;i++){
    
    if(i%3==0 && i%5==0){
        
        console.log("Fizz")
        
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else if(i%3==0 ){
        console.log("fizz")

    }
    else{
    
    console.log(i);
    }

    
    }
