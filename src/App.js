import { useState } from "react";
import "./App.css";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  setInterval(handleClick, 1000);

function handleClick(){
  const newTime = new Date().toLocaleTimeString();
  setTime(newTime);
}

  return (
    <div className="container">
      <h1>{time}</h1>
      <button class="btn" onClick={handleClick}>Get Time</button>

    </div>
  )
}


export default App;
