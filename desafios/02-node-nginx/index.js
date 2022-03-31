const express = require('express')
const app = express()
const port = 3000;
const config = {
    host: 'node-db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    connection.query('SELECT * FROM people', function(err, rows, fields) {
        if (err) throw err;

        let str = "<table border='1'> <tr><td>ID</td><td>Nome</td></tr>";

        rows.forEach(element => {
            str += "<tr><td>" + element.id + "</td><td>" + element.name + "</td></tr>";
        })

        str += "</table>"

        res.send('<h1>Full Cycle Rocks!</h1>' + str );
    });

    connection.end();
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})