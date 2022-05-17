function calcular(){
    document.getElementById("loading").style.display="block";
    setTimeout(function(){
        document.getElementById("loading").style.display="none";
        document.getElementById("resultado").innerHTML="700"+"Bs.";
    },3000)
    
};
