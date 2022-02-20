const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('hola que ase');
});

app.listen(port, ()=>{
    console.log('listening');
});

module.export = app;