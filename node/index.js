const express = require('express')

const app = express()
const port = 3000
const config = {
    host: 'db',
    database: 'nodedb',
    user: 'root',
    password: 'root'
}

const mysql = require('mysql')
const conn = mysql.createConnection(config)
const query = `INSERT INTO people (name) VALUES ('Murillo da Silva Jesus')`
conn.query(query)



app.get('/', async  (req, res) => {

    var retorno = '<h1>Full Cycle Rocks!!!!</h1>';

    const select = `SELECT name FROM people`

    await conn.query(select, (_, names) => {

        names.forEach(element => {
            retorno += `<p>${element.name}</p>`
        });
    
        res.send(retorno)
    })
})

app.listen(port);