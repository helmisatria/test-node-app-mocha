const express = require('express');
// const port = 3000 || process.env.PORT;
var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req,res) => {

    res.send([
        {
            name: 'Helmi',
            age: 20
        },
        {
            name: 'Falah',
            age: 18
        },
        {
            name: 'Nugraha',
            age: 21
        }
    ])
})

app.listen(3000);

module.exports.app = app;
