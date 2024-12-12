const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log('database connected')
}).catch((error)=>{
    console.log('database not connected');
})