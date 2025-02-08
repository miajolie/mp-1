function addition(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(secondIN);

    const sum = second + first;

    if(sum < 0){
        document.getElementById("ans").style.color="red";
    }else{
        document.getElementById("ans").style.color="black";
    }
    document.getElementById("answer").innerHTML=sum;
}

function sub(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(secondIN);

    const sub = first - second;

    if(sub < 0){
        document.getElementById("ans").style.color="red";
        
    }else{
        document.getElementById("ans").style.color="black";
        
    }
        document.getElementById("answer").innerHTML=sub;
}

function mult(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(secondIN);

    const mult = first * second;

    if(mult < 0){
        document.getElementById("ans").style.color="red";
        
    }else{
        document.getElementById("ans").style.color="black";
        
    }
    document.getElementById("answer").innerHTML=mult;
}

function division(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(secondIN);

    const div = first / second;

    if(div < 0){
        document.getElementById("ans").style.color="red";
        
    }else{
        document.getElementById("ans").style.color="black";
        
    }
    document.getElementById("answer").innerHTML=div;
}

function power(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(secondIN);

    let start = 1;

    //first ^second

    for(let i = 1; i <= second; i++){
        start = first * start;
    }

    if(ans < 0){
        document.getElementById("ans").style.color="red";
    }else{
        document.getElementById("ans").style.color="black";
        
    }
    document.getElementById("answer").innerHTML=start;
}

function clearNums(){
    document.getElementById("first num input").value="";
    document.getElementById("second num input").value= "";
    
    document.getElementById("ans").style.visibility="visible";
    document.getElementById("answer").innerHTML="";
}


