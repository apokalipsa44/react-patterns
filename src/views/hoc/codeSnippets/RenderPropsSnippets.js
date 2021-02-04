export const renderPropsCode = `import React, { useState } from "react";

const RegularComponent = () => {
  function render(hoover) {
    return (
      <div
        style={{ backgroundColor: hoover ? "red" : "blue" }}>
        <h2>Component without logic</h2>
        <p>Color change is made using RENDER PROPS!</p>
      </div>
    );
  }
  return <DetectHoover render={render} />;
};

function DetectHoover(props) {
  const [hoover, setHoover] = useState(false);

  return (
    <div
      onMouseOver={() => setHoover(true)}
      onMouseLeave={() => setHoover(false)}
    >
      {props.render(hoover)}
    </div>
  );
}

function RenderPropsExample() {
  
  return (
    <div>
      <RegularComponent />
    </div>
  );
}

export default RenderPropsExample;`