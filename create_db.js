const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    //put your mysql username
    user:'',
    //put your mysql password
    password:''
})

const sql='create database students'
connection.connect((error)=>{
    if(error) throw error
    connection.query(sql,(error)=>{
        if(error) throw error
        console.log('Database created!')
    })
})