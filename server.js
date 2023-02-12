const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db");
const devjs = require("./config/dev");
const PlayerRout = require("./Routes/PlayerRout")
const AdminRoute = require("./Routes/AdminRoute")
const TrendingRouter = require("./Routes/TrendingRouter")
const NewRoute = require("./Routes/NewRoutes")
const path =require('path')

const app = express()

app.use(express.json());

dotenv.config();



app.use('/api/player',PlayerRout)
app.use('/api/newPlayer',NewRoute)
app.use('/api/admin',AdminRoute)
app.use('/api/trending',TrendingRouter)


// --------------------------deployment------------------------------

// const __dirname1 = path.resolve(); 

// if (process.env.NODE_ENV === "production") { 
//   app.use(express.static(path.join(__dirname1, "/client/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   }); 
// }

// --------------------------deployment------------------------------

app.get("/", (req, res) => {
  res.send("API is running..");
}); 
 


const PORT = process.env.PORT || 5000

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    }) 
})
