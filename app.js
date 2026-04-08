const express = require("express");

const app = express();
app.use(express.json());

app.get("/",(req,res)=> {
   res.send("Project is running");
});

app.get("/health", (req,res) => {
  res.json({ status: "OK" });
});

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`server is running on port ${PORT}`)
});
