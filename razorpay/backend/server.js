const app = require("express")()
const path = require("path")
const cors = require("cors")
const shortid = require("shortid")
const Razorpay= require("razorpay")

const razorpay=new Razorpay({
    key_id:"rzp_test_sWnSYKJEidnzo6",
    key_secret:"7iGTToX3qqU5a1JWXqKttMGH"
})
app.use(cors())
app.get("/logo.jpg",(req,res)=>{
    res.sendFile(path.join(_dirname,"logo.jpg"))
})
app.post("/razorpay",async(req,res)=>{
    const payment_dapture=1
    const amount=499
    const currency="INR"
  const options={
      amount:amount *100,
      currency:currency,
      receipt:shortid.generate(),
      payment_capture
  }
  try {
     const response=await razorpay.orders.create(options) 
     console.log(response)
     res.json({
         id:response.id,
         currency:response.currency,
         amount:response.amount
     })
  } catch (error) {
     console.log(error) 
  }
})
app.listen(5000,()=>{
    console.log("App is listening on port 5000")
})