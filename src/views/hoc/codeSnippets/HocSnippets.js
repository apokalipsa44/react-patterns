export  const hocCode = `import React, { useState } from "react";

const RegularComponent = ({hoover}) => {

    return (
        <div style={{ backgroundColor: hoover ? "red" : "blue" }}>
          <h2>Component without logic</h2>
          <p>Color change is made using HOC!</p>
        </div>
      );

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

const WithHooverDetection = detectHoover(RegularComponent)


function HocExample() {
 
  return (
    <div>
    <WithHooverDetection/>
    </div>
  );
}

export default HocExample;`