var mysql = require('mysql2')
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// createPool helps with connection errors and opening closing connection for real reqests
// host mysql_server , here's docker understand that this host related to the host of mysql
var mysqlConnection = mysql.createPool(
    {
        host: 'mysql_server',
        user: 'asdf',
        password: 'asdf',
        database: 'school'
        // multipleStatements: true
    })

// clever cloud good for testing mysql db
// var mysqlConnection = mysql.createPool(
//     {
//         host: 'b4goyse6s0yvx5hgfo4o-mysql.services.clever-cloud.com',
//         user: 'uj3ykmljlurzpsjh',
//         password: 'muk1LsbydfVcklfrg4mB',
//         database: 'b4goyse6s0yvx5hgfo4o',
//         port: 3306,
//         multipleStatements: true
//     })

// mysqlConnection.connect((err) => {
//     if (err) {
//         console.log('Noooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo connection')
//         console.log(err)
//     }
//     else {
//         console.log('db connected')
//     }
// })

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

app.get('/', function (req, res) {
    res.send('hello world')
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

