const express = require('express');
const app = require('./app.js'); 


require('./database');

const PORT = 3000;

app.listen(PORT, () =>{
    console.log('Servidor funcionando!')
}) ;