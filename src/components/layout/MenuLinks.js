import React from "react";
import { ListItem, List, ListItemText } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function MenuLinks(props) {
  const { history } = props;
  console.log(props);
  const hooksLinks = [
    { text: "useState", url: "/hooks/useState" },
    {
      text: "useEffect",
      url: "/hooks/useEffect",
    },
    {
      text: "useRefs",
      url: "/hooks/useRefs",
    },
    {
      text: "useMemo",
      url: "/hooks/useMemo",
    },
    {
      text: "useCallback",
      url: "/hooks/useCallback",
    },
    {
      text: "useContext",
      url: "/hooks/useContext",
    },
    {
      text: "useReducer",
      url: "hooks/useReducer",
    },
    { text: "custom hooks", url: "/hooks/customHooks" },
  ];

  const getMenuItems = (items) => {
    return (
      <List>
        {items.map((item) => {
          const { text, url } = item;
          return (
            <ListItem button key={text} onClick={()=>history.push(url)}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    );
  };
  return(getMenuItems(hooksLinks)) 
}

export default withRouter(MenuLinks);
