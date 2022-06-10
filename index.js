const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const config = require("./config/config");
const fs = require("fs");
// const user = require('./routers/user.routes')

var corOptions = {
  origin: "http://localhost:3000",
};
//middlewares

app.use(cors(corOptions));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: "text/plain" }));

// app.use("/", user);
//test
app.get("/",(req,res)=>{
  res.send("ok")
})

app.post("/", (req, res) => {
  const payload = JSON.stringify(req.body);
  var file = "documents/sample.txt" + new Date();
  fs.writeFileSync(file, payload, "binary")
  
res.status(200)

});

const server = app.listen(config.PORT, () => {
  console.log(`server is running port ${config.PORT}`);
});

module.exports = server;
