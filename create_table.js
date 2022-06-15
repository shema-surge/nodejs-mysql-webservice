const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    //put mysql username
    user:'',
    //put mysql password
    password:'',
    database:'students'
})

const sql='create table student(student_id varchar(5) PRIMARY KEY,first_name varchar(50),last_name varchar(50),age int,gender varchar(6),academic_year varchar(50))'
connection.connect((error)=>{
    if(error) throw error
    connection.query(sql,(error)=>{
        if(error) throw error
        console.log('Table created!')
    })
})