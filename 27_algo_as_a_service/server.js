const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, (error) =>{
    if(!error)
        console.log("Server is running on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    })