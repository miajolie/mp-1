function addition(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(firstIN);

    const sum = second + first;

    if(sum < 0){
        document.getElementById("ans").style.color="red";
        document.getElementById("answer").innerHTML=sum;
    }else{
        document.getElementById("ans").style.visibility="visible";
        document.getElementById("answer").innerHTML=sum;
    }

}
   

function sub(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(firstIN);

    const sub = first - second;

    if(sub < 0){
        document.getElementById("ans").style.color="red";
        document.getElementById("answer").innerHTML=sub;
    }else{
        document.getElementById("ans").style.visibility="visible";
        document.getElementById("answer").innerHTML=sub;
    }

}

function mult(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(firstIN);

    const mult = first * second;

    if(mult < 0){
        document.getElementById("ans").style.color="red";
        document.getElementById("answer").innerHTML=mult;
    }else{
        document.getElementById("ans").style.visibility="visible";
        document.getElementById("answer").innerHTML=mult;
    }
}

function division(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(firstIN);

    const div = first / second;

    if(div < 0){
        document.getElementById("ans").style.color="red";
        document.getElementById("answer").innerHTML=div;
    }else{
        document.getElementById("ans").style.visibility="visible";
        document.getElementById("answer").innerHTML=div;
    }

}

function power(){
    const firstIN = document.getElementById("first num input").value;
    const first= Number(firstIN);

    const secondIN = document.getElementById("second num input").value;
    const second= Number(firstIN);

    const ans = 1 

    //first ^second

    for(const i = 1; i<=second; i++){
        ans = first * ans
    }

    if(ans < 0){
        document.getElementById("ans").style.color="red";
        document.getElementById("answer").innerHTML=ans;
    }else{
        document.getElementById("ans").style.visibility="visible";
        document.getElementById("answer").innerHTML=ans;
    }
    
}

function clear(){
    document.getElementById("").innerHTML="";
}


