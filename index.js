const express = require("express")
const cors = require("cors")



const userRoute = require("./routes/users")

const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())



//db connection
const db = require("./config/db");
db.connect()


app.use("/",userRoute)




app.listen(5000,()=>{
    console.log(`server is running at ${port}...`);
})