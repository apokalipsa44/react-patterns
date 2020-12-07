export const customHookCode=`function useCustomHook(optionalVariable){
    // some logic
    return ourLogicOutput;
}`

export const kermitSnippet = `import React from "react";
import { useState } from "react";

import kermit1 from "../../assets/img/kermit/kermit.jpg";
import kermit2 from "../../assets/img/kermit/kermit2.jpg";
import kermit3 from "../../assets/img/kermit/kermit3.jpg";
import kermit4 from "../../assets/img/kermit/kermit4.jpg";
import kermit5 from "../../assets/img/kermit/kermit5.jpg";

function CustomHooksExample() {
  
  const [isVisibleKermit1, setIsVisibleKermit1] = useKermit();
  const [isVisibleKermit2, setIsVisibleKermit2] = useKermit();
  const [isVisibleKermit3, setIsVisibleKermit3] = useKermit();
  const [isVisibleKermit4, setIsVisibleKermit4] = useKermit();
  const [isVisibleKermit5, setIsVisibleKermit5] = useKermit();

  return (
    <div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit1 && <img src={kermit1} alt="kermit" />}
          <button
            style={{ display: "block" }}
            onClick={() => setIsVisibleKermit1()}
          >
            Reveal
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit2 && <img src={kermit2} alt="kermit" />}
          <button
            style={{ display: "block" }}
            onClick={() => setIsVisibleKermit2()}
          >
            Reveal
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit3 && <img src={kermit3} alt="kermit" />}
          <button
            style={{ display: "block" }}
            onClick={() => setIsVisibleKermit3()}
          >
            Reveal
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit4 && <img src={kermit4} alt="kermit" />}
          <button
            style={{ display: "block" }}
            on
            onClick={() => setIsVisibleKermit4()}
          >
            Reveal
          </button>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "12px",
          }}
        >
          {isVisibleKermit5 && <img src={kermit5} alt="kermit" />}
          <button
            style={{ display: "block" }}
            on
            onClick={() => setIsVisibleKermit5()}
          >
            Reveal
          </button>
        </div>
    </div>
  );
}

export default CustomHooksView;

export function useKermit() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const setIsKermitCollapsed = () => {
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed);
  };
  return [isCollapsed, setIsKermitCollapsed];
}
`

