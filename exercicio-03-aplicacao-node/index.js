const express = require('express')
const app = express()
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = "INSERT INTO people(name) VALUES('Cristiano')";
connection.query(sql);
connection.end();

const select = "SELECT name FROM people";
let name = connection.query(select);

app.get('/', (req, res) => {
    res.send('<h1>{name}</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})