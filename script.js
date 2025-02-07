function checkAge(){
    const ageInput = document.getElementById("age-input").value;
    const age = Number(ageInput);
    // document.getElementById("main-content").style.visibility = "hidden";


    let errorMessage = "";

    if(isNaN(age)){
        document.getElementById("error-content").style.visibility="visible";
        document.getElementById("error-message").innerHTML="this is not a number";
    }
    else if(age %1 != 0){
        document.getElementById("error-content").style.visibility="visible";
        document.getElementById("error-message").innerHTML="this is a decimal";
    }
    else if(age < 0){
        document.getElementById("error-content").style.visibility="visible";
        document.getElementById("error-message").innerHTML="you're not even born";
    }
    else if(age< 18){
        document.getElementById("error-content").style.visibility="visible";
        document.getElementById("error-message").innerHTML="you're a child";
    }
    else if(age>18 && age< 120){
        document.getElementById("error-content").style.visibility="visible";
        document.getElementById("error-message").innerHTML="welcome!";
    }
    else if(age>120){
        document.getElementById("error-content").style.visibility="visible";
        document.getElementById("error-message").innerHTML="you are too dead";
    }
    else{
    }
    // console.log(errorMessage);
    // if(errorMessage === ""){
    //     document.getElementById("main-content").style.visibility = "visible";
    //     document.getElementById("error-content").style.visibility = "hidden";
    //     console.log("showing main content");
    // }else{
    //     document.getElementById("error-message").innerHTML = errorMessage;
        
    //     document.getElementById("main-content").style.visibility = "hidden";
    //     document.getElementById("error-content").style.visibility = "visible";
    //     console.log("showing error");

    // }
}