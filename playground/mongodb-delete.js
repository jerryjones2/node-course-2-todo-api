const {MongoClient,ObjectID} = require('mongodb') // MongoDB module v3


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server')
    }
    console.log('Connection to MongoDB server - Open')
    const db = client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Users').deleteMany({name: 'Jerry Imsand'})

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5b848c5bd77b918d3a0b1ad2')
    // }).then((results) => {
    //     console.log(JSON.stringify(results,undefined,2))
    // })

    // client.close()
    // console.log("Connection to MongoDB server - Closed")
})