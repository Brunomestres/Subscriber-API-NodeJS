require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const subscribersRouter = require('./routes/Subscribers');


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on('error', (err)=>{
    console.log(err);
});
db.once('open',()=> console.log('Database Connected'))

app.use(express.json());

app.use('/subscribers', subscribersRouter);


app.listen(3000,()=>{
    console.log('Servidor na porta 3000');
});