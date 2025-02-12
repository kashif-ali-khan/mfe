import React, { useEffect, useState } from "react";
import './App.css';

function App() {

  const sendMessage = () => {
    const event = new CustomEvent("microfrontendEvent", {
      detail: { message: "Hello from Remote App!" },
    });
    window.dispatchEvent(event);
  };

  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleMsgFromHost = (event) => {
      setMessage(event.detail.message);
      //returnMessage();

    };

    window.addEventListener("fromhost", handleMsgFromHost);

    return () => {
      window.removeEventListener("fromhost", handleMsgFromHost);
    };
  }, []);

  return (
    <div className="App">
     MF 1

      <p>Message from Host: {message}</p>
     <button onClick={sendMessage}>Send Message to Host element</button>
    </div>
  );
}

export default App;
