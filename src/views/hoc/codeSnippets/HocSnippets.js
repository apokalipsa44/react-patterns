export  const hocCode = `import React, { useState } from "react";

const RegularComponent = ({hoover}) => {

    return (
        <div style={{ backgroundColor: hoover ? "red" : "blue", width:"60%", padding:"8px" }}>
          <h2>Component without logic</h2>
          <p>Color change is made using HOC!</p>
        </div>
      );

const WithHooverDetection = detectHoover(RegularComponent)

function detectHoover (Component) {
    return function () {
      const [hoover, setHoover] = useState(false);

      return (
        <div
          onMouseOver={() => setHoover(true)}
          onMouseLeave={() => setHoover(false)}
        >
          <RegularComponent hoover={hoover}/>
        </div>
      );
    };
  };


function HocExample() {
 
  return (
    <div>
    <WithHooverDetection/>
    </div>
  );
}

export default HocExample;`