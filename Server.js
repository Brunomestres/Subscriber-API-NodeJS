const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/subscribers',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on('error', (err)=>{
    console.log(err);
});

db.once('open',()=> console.log('Database Connected'))

app.listen(3000,()=>{
    console.log('Servidor na porta 3000');
});