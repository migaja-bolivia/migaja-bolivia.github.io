function calcular(){
    document.getElementsByClassName("loader").style.display="block";
    setTimeout(function(){
        document.getElementsByClassName("loader").style.display="none";
        document.getElementById("resultado").innerHTML="700"+"Bs.";
    },3000)
    
};

window.onload=()=>{
    document.getElementsByClassName("loader").style.display="none";
};