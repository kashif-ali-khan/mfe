import React, { useEffect, useRef } from "react";
import  {mount} from 'VueHost/VueApp';
const VueComponent = () => {

    const ref = useRef(null);
    useEffect(() => {
      console.log(ref.current,'Current------');
      console.log(mount,'mount------');
      if (ref.current) {
        mount(ref.current);
      }

    }, []);



  return (
    <div>
      <h1>Hello from Vue</h1>
      <div id="vue_root" ref={ref}></div>
    </div>
  );
}

export default VueComponent;