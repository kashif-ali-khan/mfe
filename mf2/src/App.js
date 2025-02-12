import React, { useEffect, useState } from 'react'; 
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const handleMsgFromHost = (event) => {
      console.log(event,'In MF2')
      setMessage(event.detail.message);
      //returnMessage();

    };

    window.addEventListener("fromangular", handleMsgFromHost);

    return () => {
      window.removeEventListener("fromangular", handleMsgFromHost);
    };
  },[]);

  return (
    <div className="App">
   MF2
   <div>{message}</div>
    </div>
  );
}

export default App;
