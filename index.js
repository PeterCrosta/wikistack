const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require('./models');

console.log('Beginning of file');

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res) => {
  res.send(`<h1>You're going to die up there.</h1>`);
});

const init = async () => {
  await db.sync({ force: true });
  console.log('After db sync');
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();

console.log('End of file');
