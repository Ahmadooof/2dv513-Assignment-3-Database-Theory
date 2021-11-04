var mysql = require('mysql2')
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

app.use(bodyparser.json());

// let port = process.env.PORT
let mySQLHost = process.env.HOST
let username = process.env.USERNAME;
let password = process.env.PASSWORD;
let database = process.env.DATABASE;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// createPool helps with connection errors and opening closing connection for real reqests
// host mysql_server , here's docker understand that this host related to the host of mysql

app.listen((4000),() => console.log(`mysql_host: ${mySQLHost}`));        // () this means running on localhost, in k8s will work on the cluster ip of this port, thats why dockerfile expose 4000

var mysqlConnection = mysql.createPool(
    {
        host: mySQLHost,                // in k8s we refer to the configmap and configmap will refer to mysql service which will refer to MYSQL... no need to specify the port!
        // port: port,                  // it is by default 3306, which mysql uses
        user: username,
        password: password,
        database: database
        // multipleStatements: true
    })

app.get('/', function (req, res) {
    res.send('hello world');
})

app.get('/student', (req, res) => {
    mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            res.send("Error");
            console.log(err);
        }
    })
});

app.get('/student-course', (req, res) => {
    mysqlConnection.query('SELECT * FROM student INNER JOIN course ON course.id = student.course_id', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            res.send("Error");
            console.log(err);
        }
    })
});

app.get('/student-course-ordered', (req, res) => {
    mysqlConnection.query('SELECT * FROM student inner JOIN course ON student.course_id = course.id  ORDER BY student.name', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            res.send("Error");
            console.log(err);
        }
    })
});

app.get('/student-course-grade', (req, res) => {
    mysqlConnection.query(
        'SELECT * FROM student INNER JOIN course ON course.id = student.course_id INNER JOIN grade ON grade.id = student.grade_id'
        , (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else {
                res.send("Error");
            }
        })
});

app.get('/count-students', (req, res) => {
    mysqlConnection.query(
        'SELECT title,COUNT(course_id) AS NumberOfStudents FROM student inner JOIN course ON course.id = student.course_id GROUP BY title'
        , (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else {
                res.send("Error");
                console.log(err);
            }
        })
});

// app.get('/create_view', (req, res) => {
//     mysqlConnection.query(
//         'CREATE VIEW Students_who_pass AS SELECT name, grade from student inner join grade ON grade.id = grade_id WHERE grade > 49'
//         , (err, rows, fields) => {
//             if (!err)
//                 res.send(rows);
//             else {
//                 res.send("T");
//                 console.log(err)
//             }
//         })
// });

app.get('/show_view', (req, res) => {

    mysqlConnection.query(
        'select * from Students_who_pass'
        , (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else {
                res.send("Error");
                console.log(err)
            }
        })
});

