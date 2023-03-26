const express=require('express');
const tasks=require('./routes/tasks');
const app=express();
const connectDb=require('./db/connect');
const notfound=require('./middlleware/notfound');
require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json());
// routes

app.use('/api/v1/tasks',tasks)

app.use(notfound);
const port=3000;
const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`server listening on port: ${port}`));
    }catch(error){
        console.log(error);
    }
}

start();