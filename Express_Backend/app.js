const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/dojo');

app.use(bodyParser.json());
app.use(cors());

sequelize
.authenticate()
.then(() => {
  console.log('connected to PostgreSQL');
})
.catch(err => {
  console.error('Failed connection to PostgreSQL:', err);
});

const Ninja = sequelize.define('ninja', {
    name: {type: Sequelize.STRING},
    age: {type: Sequelize.INTEGER}
  });

Ninja.sync({force: false}).then(() => {
    console.log('Table created')
  });

app.get('/data', function(req,res){
  Ninja.findAll().then(data => {
    console.log(data);
    res.send(data);
  })
})

app.post('/data', function(req,res){
Ninja.create({
    name: req.body.name,
    age: req.body.age
}).then(data => {
  console.log('incoming data');
  res.send({
		status: 'data inputted',
		name: req.body.name,
		age: req.body.age
  })
});
})

app.listen(3210, ()=>{
  console.log('Server @port 3210')
})