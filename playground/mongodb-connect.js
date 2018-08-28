// const MongoClient = require('mongodb').MongoClient // MongoDB module v3
const {MongoClient,ObjectID} = require('mongodb') // MongoDB module v3

// var obj = new ObjectID();
// console.log(obj)

//object destructuring
// var user = {name: 'andrew', age: 25}
// var {name} = user;
// console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connection to MongoDB server - Open')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Jerry Imsand',
    //     age: 53,
    //     location: 'Hendersonville, TN'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err)
    //     }

    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    client.close()
    console.log("Connection to MongoDB server - Closed")
})