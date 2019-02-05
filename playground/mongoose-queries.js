const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c536ac954f2a14647aad42d';

// var id = '5c59d735572cf82b0239360f';
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User does not exist');
  }

  console.log('User By Id', user);
}).catch((e) => console.log(e));
