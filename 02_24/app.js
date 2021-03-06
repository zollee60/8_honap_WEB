const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

const bookController = require('./controllers/bookController');

app.use(cors());

app.use(express.json());

app.use('/', express.static('public'));

app.use('/book', bookController);

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});