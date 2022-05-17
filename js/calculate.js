function calcular(){
    document.getElementById("loading").style.display="block";
    let porcion1,porcion2,porcion3,porcion4,porcion5,porcion6;
    porcion1=document.getElementById("porcion1").value;
    console.log("porcion1",porcion1);
    setTimeout(function(){
        document.getElementById("loading").style.display="none";
        document.getElementById("resultado").innerHTML="700"+"Bs.";
    },3000)
    
};
