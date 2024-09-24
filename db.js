const mongoose = require('mongoose')
const URI = 'mongodb+srv://akashkathole:Akash123@contact.v1zig.mongodb.net/?retryWrites=true&w=majority&appName=Contact'

const connectToMongo = () =>{
    mongoose.connect(URI)
    .then(()=>console.log('MongoDB Connected'))
}

module.exports =connectToMongo