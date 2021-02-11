
const dotenv = require('dotenv').config()
const express = require('express')
const cors = require("cors")

const app = express()

const port = process.env.PORT || 7000

app.use(cors())
app.use(express.json())
app.use("/api/*",(_,res) => {
    res.json({data: "The API Lives!!"})
})

app.listen(port, () => {`server is listening on port: ${port}`
})

// console.log("It's Alive!!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER)
// console.log(process.env.PORT)
