const {MongoClient,ObjectID} = require('mongodb') // MongoDB module v3


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connection to MongoDB server - Open')
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b848b4b403a978d37753c4f')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs,undefined,2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({name:'Jerry Jones'}).count().then((count) => {
        console.log(`Users count: ${count}`)
    }, (err) => {
        console.log('Unable to fetch Users', err)
    })

    // client.close()
    // console.log("Connection to MongoDB server - Closed")
})