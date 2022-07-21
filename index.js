const express = require('express')
const bollyRouter = require('./routes/Bollywood')
const hollyRouter = require('./routes/Hollywood')
const techRouter = require('./routes/Technology')
const fitRouter = require('./routes/Fitness')
const foodRouter = require('./routes/Food')
const homeRouter = require('./routes/Home')
const cors = require("cors");
const app = express()

app.use(cors())
app.use("/api",bollyRouter)
app.use("/api",hollyRouter)
app.use("/api",techRouter)
app.use("/api",fitRouter)
app.use("/api",foodRouter)
app.use("/api",homeRouter)


app.listen(process.env.PORT||3450,()=>{
    console.log("app is running");
});