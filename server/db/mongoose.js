var mongoose = require('mongoose')

mongoose.Promise = global.Promise

const localDbUri = 'mongodb://localhost:27017/TodoApp'
const atlasDbUri = 'mongodb://cluster0-ias3z.mongodb.net:27017/TodoApp'

mongoose.connect(process.env.MONGODB_URI || localDbUri,{ useNewUrlParser: true })

module.exports = {mongoose}