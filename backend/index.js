const db = require("./Database/connection");

const express = require("express");
const cors = require("cors")


const app = express();
app.use(express.json());
app.use(cors());
db();

app.get("/", (req,res)=>{
    res.send("hello world");
})

app.use("/api/auth", require("./Routes/auth"));
app.use("/api/notes", require("./Routes/notes"));

const port = 4001;
app.listen(port, ()=>{
    console.log(`app listening at port http://localhost:${port}`);
})