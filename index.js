const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()
const PORT = 4000;

const connection = mysql.createConnection({
    host: 'localhost',
    //put mysql username
    user: '',
    //put mysql password
    password: '',
    database: 'students'
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/register',(req,res)=>{
    const sql='insert into student(student_id,first_name,last_name,age,gender,academic_year) values(?,?,?,?,?,?)'
    const values=[req.body.student_id,req.body.first_name,req.body.last_name,req.body.age,req.body.gender,req.body.academic_year]
    connection.query(sql,values,(error,result)=>{
        if(error) res.send(error)
        res.send(result)
    })
})

app.get('/list',(req,res)=>{
    const sql='select * from student';
    connection.query(sql,(error,result)=>{
        if(error) res.send(error)
        res.send(result)
    })
})

app.post('/search',(req,res)=>{
    const sql='select * from student where student_id=?'
    connection.query(sql,[req.body.search_id],(error,result)=>{
        if(error) res.send(error)
        res.send(result)
    })
})

app.listen(PORT,()=>{console.log(`PORT ${PORT}: listening....`)});