const mongoose = require('mongoose')
const URI = 'mongodb+srv://schoolofinspirationalai:OAFqDazeUOpnBBzQ@contact.qabnx.mongodb.net/?retryWrites=true&w=majority&appName=contact'

const connectToMongo = () =>{
    mongoose.connect(URI)
    .then(()=>console.log('MongoDB Connected'))
}

module.exports =connectToMongo