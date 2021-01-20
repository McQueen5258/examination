let arr = [
    {
        "标题":"蝌蚪留言簿",
        "介绍":"在这个网站可以给学堂一些意见、建议，可以帮助学堂变得更好",
        "网站URL链接":"https://mcqueen5258.github.io/examination/KIDOMessage%20Book/"
    },
    {
        "标题":"莲花",
        "介绍":"可以在这个网页李体验到莲花的乐趣，比如点击莲花会靠近你",
        "网站URL链接":"https://mcqueen5258.github.io/examination/Lotus/"
    },
    {
        "标题":"新春快乐",
        "介绍":"在这个网页感受到来自新春的温暖，在冬天也不怕冷了",
        "网站URL链接":"https://mcqueen5258.github.io/examination/Happy-New-Year/"
    },
    {
        "标题":"定时领红包",
        "介绍":"在这个网页可以体验到定时领红包的乐趣",
        "网站URL链接":"https://mcqueen5258.github.io/examination/red-envelopes/"
    }
];
let 表头 = ["标题","介绍","网站URL链接"];
let table = document.createElement("table");
let tr = document.createElement("tr");
let th = document.createElement("th");
let td = document.createElement("td");
let thHTML;
document.body.appendChild(table);
table = document.querySelector("table");
table.appendChild(tr);

let trHTML = document.querySelectorAll("tr");
for (let i = 0; i < 表头.length; i++) {
    trHTML[0].appendChild(document.createElement("th"));
    trHTML[0].children[i].innerText = 表头[i];
}


for (let i = 0; i < arr.length; i++) {
    table.appendChild(document.createElement("tr"));
    trHTML = document.querySelectorAll("tr");
    let num = 0;
    for (const a in arr[i]) {
        trHTML[i+1].appendChild(document.createElement("td"));
        trHTML[i+1].children[num].innerText = arr[i][a];
        num++;
    }
    
}
