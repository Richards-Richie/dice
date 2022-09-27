function reloadfun(){
    var img1=document.getElementById("img1");
    var img2=document.getElementById("img2");
    var random=Math.floor(Math.random()*6)+1;
    var random1=Math.floor(Math.random()*6)+1;
    var rand1="images/dice"+random+".png";
    var rand2="images/dice"+random1+".png";
    img1.setAttribute("src",rand1);
    img2.setAttribute("src",rand2);
    var res=document.getElementById("result");
    if(random1>random){
        
        res.innerHTML="Player 2 wins";
    }
    else if(random>random1){
        res.innerHTML="Player 1 wins";
    }
    else{
        res.innerHTML="Draw";
    }
}