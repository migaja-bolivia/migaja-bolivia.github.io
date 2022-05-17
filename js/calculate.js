function calcular(){
    document.getElementById("loading").style.display="block";
    let porcion1,porcion2,porcion3,porcion4,porcion5,porcion6;
    porcion1=document.getElementById("porcion1").value;
    porcion2=document.getElementById("porcion2").value;
    porcion3=document.getElementById("porcion3").value;
    porcion4=document.getElementById("porcion4").value;
    porcion5=document.getElementById("porcion5").value;
    porcion6=document.getElementById("porcion6").value;
    console.log("porcion1",porcion1);
    console.log("porcion2",porcion2);
    console.log("porcion3",porcion3);
    console.log("porcion4",porcion4);
    console.log("porcion5",porcion5);
    console.log("porcion6",porcion6);
    setTimeout(function(){
        document.getElementById("loading").style.display="none";
        document.getElementById("resultado").innerHTML="700"+"Bs.";
    },3000)
    
};
