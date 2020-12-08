import React from "react";
import { ListItem, List, ListItemText } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { hooksLinks } from "../links/hooksLinks";

function MenuLinks(props) {
  const { history } = props;
  // const hooksLinks = console.log(props);

  const getMenuItems = (items) => {
    return (
      <List>
        {items.map((item) => {
          const { text, url } = item;
          return (
            <ListItem button key={text} onClick={() => history.push(url)}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    );
  };
  return getMenuItems(hooksLinks);
}

export default withRouter(MenuLinks);
