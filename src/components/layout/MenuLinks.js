import React from "react";
import { Link } from "react-router-dom";

function MenuLinks() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/hooks/useState">useState</Link>
        </li>
        <li>
          <Link to="/hooks/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/hooks/useRedux">useRedux</Link>
        </li>
        <li>
          <Link to="/hooks/useRefs">useRefs</Link>
        </li>
        <li>
          <Link to="/hooks/useMemo">useMemo</Link>
        </li>
        <li>
          <Link to="/hooks/customHooks">customHooks</Link>
        </li>
        <li>
          <Link to="/hooks/useContext">useContext</Link>
        </li>
        <li>
          <Link to="/hooks/useReducer">useReducer</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuLinks;
