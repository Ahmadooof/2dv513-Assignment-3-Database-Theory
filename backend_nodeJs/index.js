var mysql = require('mysql')
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

// var router = express.Router();
// var path = 'C:/Users/ahmad/Desktop/2dv513/views/';

// router.get("/",function(req,res){
//   res.sendFile(path + "index.html");
// });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var mysqlConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'school',
        port: 3306,
        multipleStatements: true
    })

mysqlConnection.connect((err) => {
    if (err) {
        console.log('Noooooooooooooooooo connection')
        console.log(err)
    }
    else {
        console.log('db connected')
    }
})

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

app.get('/student', (req, res) => {
    mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log("error");
    })
});

app.get('/student-course', (req, res) => {
    mysqlConnection.query('SELECT * FROM student INNER JOIN course ON course.id = student.course_id', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log("error");
    })
});

app.get('/student-course-ordered', (req, res) => {
    mysqlConnection.query('SELECT * FROM student inner JOIN course ON student.course_id = course.id  ORDER BY student.name', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log("error");
    })
});

app.get('/student-course-grade', (req, res) => {
    mysqlConnection.query(
        'SELECT * FROM student INNER JOIN course ON course.id = student.course_id INNER JOIN grade ON grade.id = student.grade_id'
        , (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log("error");
        })
});

app.get('/count-students', (req, res) => {
    mysqlConnection.query(
        'SELECT title,COUNT(course_id) AS NumberOfStudents FROM student inner JOIN course ON course.id = student.course_id GROUP BY title'
        , (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log("error");
        })
});

app.get('/create_view', (req, res) => {
    mysqlConnection.query(
        'CREATE VIEW Students_who_pass AS SELECT name, grade from student inner join grade ON grade.id = grade_id WHERE grade > 50'
        , (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log("error");
        })
});

app.get('/show_view', (req, res) => {
    mysqlConnection.query(
        'select * from Students_who_pass'
        , (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log("error");
        })
});

