const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mydb = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "buycar"
});

mydb.connect();

const app = express();

//启用bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    next();
});

app.get('/getCar', (req, res) => {
    let sql = 'select * from car WHERE 1';
    mydb.query(sql, (err, results) => {
        res.json(results);
    });
});

app.get('/searchCar', (req, res) => {
    let sql = 'select simpleName from car where 1';
    if (true) {
        sql += " AND simpleName REGEXP 't'";
    }
    // sql += " AND simpleName LIKE '%" + req.query.kw + "%'";
    // } else {
    //     sql += " AND simpleName REGEXP '[" + req.query.kw + "]'";
    // }
    // sql += " AND simpleName REGEXP 'd'";

    mydb.query(sql, (err, results) => {
        res.json(results);
    });
})
app.get('/getQuestion', (req, res) => {
    let sql = 'select * from question WHERE 1';
    mydb.query(sql, (err, results) => {
        res.json(results);
    });
});

app.listen(8888, function() {
    console.log("服务开启，8888……")
})