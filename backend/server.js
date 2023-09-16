const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
const passport = require("passport")
const session = require('express-session');


const cors = require("cors")
app.use(cors());

const DbConnect = require("./database")

dotenv.config();
DbConnect();
// Configure express-session middleware
app.use(session({ name:"session",secret:"hello ji",keys:["secret"],maxAge:24*60*60*1000}));
// passport require
require("./passport/passport")(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json());
app.use(cookieParser());

// Routing
const user = require("./routes/userRoute");
app.use("/api/v1",user);

const authRoute = require("./routes/googleAuth")
app.use("/auth",authRoute)

const PORT = process.env.PORT
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
})

