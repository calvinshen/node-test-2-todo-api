var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
  console.log(req.body);
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('start on port 3000');
});

module.exports = {app};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('save todo', doc)
// }, (e) => {
//   console.log('Unable to save');
// });
//
// var newTodo2 = new Todo({
//   text: '   '
// });
//
// newTodo2.save().then((doc) => {
//   console.log('save todo2', doc)
// }, (e) => {
//   console.log('Unable to save todo2', e);
// });

// user model
// email - require/trim - type = string, min 1

// var user = new User({
//   email: 'calvin@somewhere.com'
// });
//
// user.save().then((doc) => {
//   console.log('save user', doc)
// }, (e) => {
//   console.log('Cannot save user', e)
// });
