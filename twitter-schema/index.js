const express = require("express")
const connect = require("./configs")
const app =express()
const port =process.env.PORT || 4000
app.listen(PORT, async () => {
    try {
      await connect();
    } catch (error) {
      console.log(error);
    }
    console.log("listining to the port 5000")
})