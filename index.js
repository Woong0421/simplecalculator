var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("Hello Calc"+"<br>"+"add=덧셈, minus= 마이너스, multi = 곱셈, div = 나눗셈"
    +"<br>"+"/(사칙연산)? p1=(변수)&p2=(변수)를 주소창에 입력해주세요.");
      
});

app.get("/add", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) + (Number)(p2);
 
    res.send("p1 = "+p1+"<br>"+"p2 = "+p2+"<br>"+"p1 + p2 = "+p1+"+"+p2+"<br>"+"Result : " + result);
});

app.get("/minus", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) - (Number)(p2);

    res.send("p1 = "+p1+"<br>"+"p2 = "+p2+"<br>"+"p1 - p2 = "+p1+"-"+p2+"<br>"+"Result : " + result);
});

app.get("/multi", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) * (Number)(p2);

    res.send("p1 = "+p1+"<br>"+"p2 = "+p2+"<br>"+"p1 x p2 = "+p1+"x"+p2+"<br>"+"Result : " + result);
});

app.get("/div", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = (Number)(p1) / (Number)(p2);
    if(0==p2){
        res.send("p2에 0이 아닌 다른 숫자를 넣어주세요")
    };

    
    res.send("p1 = "+p1+"<br>"+"p2 = "+p2+"<br>"+"p1 / p2 = "+p1+"/"+p2+"<br>"+"Result : " + result);
});

app.listen(8888);