const express= require("express");
const cors = require('cors')
const {sequelize} = require("./models")
const app =express();
const userRouter = require("./controllers/users")
const divisionRouter = require("./controllers/divisions")


//=================== basic utility imports========================
app.use(cors());
app.use(express.json());
//=================================================================

// importing routers
app.use("/user",userRouter)
app.use("/division",divisionRouter)



//routes
app.get("/",(req,res)=>{
   res.status(200).send("hi")
})


app.listen(4000,async ()=>{
    console.log("server running at port 4000");
    await sequelize.sync();
    console.log("database synced");
});