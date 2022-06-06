
import './App.css';
import useEffect from "react"
function App() {

  const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script = document.createElement("script")
      script.src =src
      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
    })
  }
  useEffect(()=>{
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
  })
  return (
    <div className="App">
     
    </div>
  );
}

export default App;