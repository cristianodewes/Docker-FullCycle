const express = require('express')
const app = express()
const port = 3000;
const config = {
    host: 'node-db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
let connection = mysql.createConnection(config)

connection.query('USE nodedb');
connection.query('CREATE TABLE people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))');

const names = ['Cristiano', 'Maria', 'Joao', 'Carla', 'Pedro', 'Paula', 'Julia'];

const sql = ("INSERT INTO people(name) VALUES(?)");

names.forEach(element => {
    connection.query(sql, element);
})

connection.end();

app.get('/', (req, res) => {

    connection = mysql.createConnection(config)

    connection.query('SELECT * FROM people', function (err, rows, fields) {
        if (err) throw err;

        let str = "<table border='1'> <tr><td>ID</td><td>Nome</td></tr>";

        rows.forEach(element => {
            str += "<tr><td>" + element.id + "</td><td>" + element.name + "</td></tr>";
        })

        str += "</table>"

        res.send('<h1>Full Cycle Rocks!</h1>' + str);
    });

    connection.end();
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})