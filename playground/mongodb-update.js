const {MongoClient,ObjectID} = require('mongodb') // MongoDB module v3


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server')
    }
    const db = client.db('TodoApp')
    console.log('Connection to MongoDB server - Open')

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5b84b0e8ba63e7aac6b5fd1e')
//    },{
//        $set: {
//            completed: true
//        }
//    },{
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result)
//    })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b84b6b9ba63e7aac6b5fe4b')
    },{
        $set: {
            name: 'Jen2'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // client.close()
    // console.log("Connection to MongoDB server - Closed")
})