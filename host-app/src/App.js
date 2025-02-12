import './App.css';
import React, {Suspense, useState, useEffect} from 'react';
import VueComponent from './components/VueComponent.jsx';

import AngularModule from './components/AngularComponent.js';
const MicroFront1 = React.lazy(() => import('mf1/App'));
const MicroFront2 = React.lazy(() => import('mf2/App'));
//const AngularMfe = React.lazy(() => import('angularMfe/Kashif'));

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleMicrofrontendMessage = (event) => {
      setMessage(event.detail.message);
      returnMessage();

    };

    window.addEventListener("microfrontendEvent", handleMicrofrontendMessage);

    return () => {
      window.removeEventListener("microfrontendEvent", handleMicrofrontendMessage);
    };
  }, []);


  const returnMessage = () => {
    const event = new CustomEvent("fromhost", {
      detail: { message: "recieved message" },
    });
    window.dispatchEvent(event);
  };





  return (
    <div className="App">
    Host APP
    <p>Message from MF1: {message}</p>
    <hr/>

    <Suspense fallback="Loading MF1">
      
      <MicroFront1 />
    </Suspense>
    <hr/>
    <Suspense fallback="Loading MF2">
      <MicroFront2 />
    </Suspense>
    <hr/>
    {/* <Suspense fallback="Loading MF3">
      <AngularMfe />
    </Suspense> */}

  <AngularModule></AngularModule>

    <VueComponent/>
    </div>
  );
}

export default App;
