const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post("/sort", (req, res) => {
    const order = req.body.sort_order
    const arr = req.body.values

    if (order == 'asc'){
        res.send(`Order the following values : [${arr}] by ascending order
            Result : ${arr.sort()}`)
    } else if (order == 'desc') {
        res.send(`Order the following values : [${arr}] by descending order
            Result : ${arr.sort().reverse()}`)
    } else {
        res.send('There is an error in the sorting order')
    }
})

app.listen(port, (error) =>{
    if(!error)
        console.log("Server is running on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    })

//J'ai testé les requêtes avec Thunder Client sur VScode