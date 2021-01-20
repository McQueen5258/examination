//亮/暗模式切换跟踪
let LDModel = true;

let LDButton = document.querySelector(".LDButton");
let form = document.querySelector(".form");
let body = document.body;
// document.addEventListener("keyUp",mode);

// box-shadow: #666 0px 0px 10px;
    // border-radius: 5px;
document.onkeydown=function(event){
    // console.log(event);

    if (event.key == "L" && LDModel == false) {
        console.log("亮模式启动");
        LDModel = !LDModel;
        LDButton.style.backgroundImage = "url(asset/image/LDModel/sun.svg)";
        form.style.color = "black";
        body.style.backgroundColor = "white";

    } else if (event.key == "D" && LDModel) {
        console.log("暗模式启动");
        LDModel = !LDModel;
        LDButton.style.backgroundImage = "url(asset/image/LDModel/moon.svg)";
        form.style.color = "white";
        body.style.backgroundColor = "black";

    }

}
LDButton.onclick=function(event){
    if (LDModel == false) {
        console.log("亮模式启动");
        LDModel = !LDModel;
        LDButton.style.backgroundImage = "url(asset/image/LDModel/sun.svg)";
        form.style.color = "black";
        body.style.backgroundColor = "white";
    } else {
        console.log("暗模式启动");
        LDModel = !LDModel;
        LDButton.style.backgroundImage = "url(asset/image/LDModel/moon.svg)";
        form.style.color = "white";
        body.style.backgroundColor = "black";
    }
}


        // 表单
$(".biaoTi").blur(function(){
    var biaoTi=$(".biaoTi").val();
    if (biaoTi ==="") {
        console.log("标题不能为空");
        alert("标题不能为空");
    }
});
$(".name").blur(function(){
    var name=$(".name").val();
    if (name ==="") {
        console.log("姓名为空");
        $(".name").val("匿名");
    }
});
$(".liuYan").blur(function(){
    var liuYan=$(".liuYan").val();
    if (liuYan.length < 10) {
        console.log("留言内容未超过10个字符");
        alert("留言内容未超过10个字符");
    }
});

$(".liuYan").blur(function(){
    var liuYan=$(".liuYan").val();
    if (liuYan.length < 10) {
        console.log("留言内容未超过10个字符");
        alert("留言内容未超过10个字符");
    }
});
// function mode(e) {
//     console.log(e);
// }



// 弹窗

$(document).ready(function() {
    $("#btn").click(function() {
        $("#choiceWindow").slideDown(300);
        $("#backGround").show();

        // 显示内容
        // setInterval(showTime(),1);
        let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes(); 
            let second = date.getSeconds();

            document.querySelector(".showTime").innerText = year+'年'+month+'月'+day+'日'+hour+':'+minute+':'+second;
        setInterval(function(){
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes(); 
            let second = date.getSeconds();

            document.querySelector(".showTime").innerText = year+'年'+month+'月'+day+'日'+hour+':'+minute+':'+second;
        }, 1000);
        document.querySelector(".biaoti").innerText = $(".biaoTi").val();
        document.querySelector(".xingming").innerText =$(".name").val();
        document.querySelector(".dianhua").innerText =$(".phone").val();
        document.querySelector(".liuyan").innerText =$(".liuYan").val();

    });

    $("#zaiXiangXiang").click(function() {
        $("#choiceWindow").slideUp(300);
        $("#backGround").hide();
    })

});


function showTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes(); 
    let second = date.getSeconds();

    document.querySelector(".showTime").innerText = year+'年'+month+'月'+day+'日'+hour+':'+minute+':'+second;
// alert(year+'年'+month+'月'+day+'日 '+hour':'+minute+':'+second);
}
$("#btn2").click(function() {
    $("#choiceWindow2").slideDown(300);
    $("#backGround").show();

});
