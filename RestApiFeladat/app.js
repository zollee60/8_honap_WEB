const express = require('express');
const app = express();
const port = 3000;

const charController = require('./Controllers/charController');

app.use(express.json());

app.use('/', express.static('public'));

app.use('/char', charController);

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});