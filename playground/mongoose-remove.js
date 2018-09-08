const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result)
// })

// Todo.findOneAndRemove({_id:''}).then((todo) => {
//     console.log(todo)
// })

// Todo.findOneAndDelete('5b93cac28a05171e24d45fb4').then((todo) => {
//     console.log(todo)
// })