const express = require("express")
const cors = require("cors");
require("dotenv").config()
const {connect } = require("./Config/db")
const {Userathuenticate} = require("./Middlewares/user.authentication")
const {adminAccessRouter} = require("./Routers/adminAccess.Route")
const {userRouter} = require("./Routers/user.routes")
const {adminRouter} = require("./Routers/admin.routes")
const {userNumRouter} = require("./Routers/userNum.routes")
const { Beauty } = require("./Routers/Beauty.route")
const { Dairy } = require("./Routers/Dairy.route")
const { Electronics } = require("./Routers/Electronics.route")
const { men } = require("./Routers/Fashion.route")
const { Fruits } = require("./Routers/Fruits.route")
const { HomeKitchen } = require("./Routers/Home&Kitchen.route")
const { AutoCare } = require("./Routers/HomeImprovement.route")
const { apples_pears } = require("./Routers/PremiumFruits.route")
const { SportsToys } = require("./Routers/SportsToys")
const { Staples } = require("./Routers/Staples.route")
// const { Staples } = require("./Routers/Staples.route");
const { Adminathuenticate } = require("./Middlewares/admin.authenticate");


const app = express()
app.use(express.json())
app.use(cors({
    origin:"*",
}))

app.get("/",(req,res) => {
    res.send("Welcome Home to Frontend")
})

// user Signup/login
app.use("/users",userRouter)
//OTP Verification
app.use("/otp",userNumRouter)
//Admin Athuenticate middleware
//Admin Login
app.use("/admin",adminRouter)
// app.use(Adminathuenticate)

//admin CRUD
app.use("/admincrud",adminAccessRouter)


app.use("/fruits", Fruits)
app.use("/dairy", Dairy)
app.use("/staples", Staples)
app.use("/apples_pears", apples_pears)
app.use("/HomeAppliance", HomeKitchen)
app.use("/men", men)
app.use("/mobiles", Electronics)
app.use("/makeup", Beauty)
app.use("/autocare", AutoCare)
app.use("/toysgames", SportsToys)




app.listen(process.env.PORT, async() => {
    try{
        await connect()
        console.log("DB is Connected to Sucessssfully....");

    }catch(e){
        console.log("DB is connected to failed!!!!!")
    }
    console.log(`http://localhost:${process.env.PORT}`);
})