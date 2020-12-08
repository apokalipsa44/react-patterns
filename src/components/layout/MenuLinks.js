import React from "react";
import { ListItem, List, ListItemText } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function MenuLinks(props) {
  const { history, linkList } = props;
  // const hooksLinks = console.log(props);

  const getMenuItems = (items) => {
    return (
      <List>
        {linkList.map((item) => {
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
  return getMenuItems(linkList);
}

export default withRouter(MenuLinks);
