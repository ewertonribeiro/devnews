import server from 'express'
import dotenv from 'dotenv'

dotenv.config({path:"./Config/config.env"});

const Port = process.env.PORT || 5000;

server().listen(Port , ()=> console.log(`Server is running at ${Port}`))

