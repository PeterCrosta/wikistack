const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require('./models');

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
db.authenticate().
then(() => {
    console.log('connected to the database')
});

app.get('/', (req, res) => {
    res.send(`<h1>You're going to die up there.</h1>`)
})


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});