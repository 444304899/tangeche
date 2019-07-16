//npm init -y
//cnpm install express mysql --save-dev
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mydb = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "h51904"
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

app.get("/getEmployee", function(req, res) {
    var sql = "select * from employee where 1 ";
    if (req.query.kwords) {
        sql += " AND name LIKE '%" + req.query.kwords + "%'";
    }
    if (req.query.deptid) {
        sql += " AND deptid=" + req.query.deptid;
    }
    mydb.query(sql, function(err, results) {
        res.json(results);
    })
})

app.get('/getQuestion', (req, res) => {
    let sql = 'select * from questions WHERE 1';
    mydb.query(sql, (err, results) => {
        res.json(results);
    });
});


app.get('/searchProcuct', (req, res) => {
    let sql = 'select * from shop_goods WHERE 1';
    if (req.query.kw) {
        sql += " AND kw LIKE '%" + req.query.kw + "%' limit 20";
    }
    mydb.query(sql, (err, results) => {
        res.json(results);
    });
});

app.post('/reg', (req, res) => {
    let sql = 'select * from admin WHERE 1';
    if (req.body.username) {
        sql += " AND username='" + req.body.username + "'";
    }
    mydb.query(sql, (err, results) => {
        if (results.length > 0) {
            res.json({
                msg: "username_already_exist"
            })
        } else {
            let newsql = `insert into admin(username,password) values ("${req.body.username}",${req.body.passw1})`;
            mydb.query(newsql, (err, results) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.json({
                    msg: "reg_success"
                })
            })
        }
    });
});


app.listen(8888, function() {
    console.log("服务成功开启，监听端口8888……")
})