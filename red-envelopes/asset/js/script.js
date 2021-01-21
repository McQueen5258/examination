let 过年点击 = document.getElementById("guonianClick");
let 倒计时 = 10;

过年点击.onclick=function(){
    过年点击.onclick = null;
    setTimeout(倒计时函数,1000);

};



function 倒计时函数(){
    过年点击.innerText = 倒计时;
    倒计时--;
    if (倒计时 < 0) {
        过年点击.innerText = "拜年了！点击领红包";
        过年点击.onclick=function(){
            document.getElementById("svg").style.display = "flex";
            document.getElementById("h1").style.display = "flex"
        }; 
    }else {
        setTimeout(倒计时函数,1000);
    }
}

