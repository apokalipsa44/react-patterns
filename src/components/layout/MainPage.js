import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import CustomHooksView from "../../views/hooks/CustomHooksView";
import UseContextView from "../../views/hooks/useContexView";
import UseEffectView from "../../views/hooks/useEffectView";
import UseMemoView from "../../views/hooks/useMemoView";
import UseReducerView from "../../views/hooks/UseReducerView";
import UseReduxView from "../../views/hooks/useReduxHooks";
import UseRefsView from "../../views/hooks/useRefsView";
import UseStateView from "../../views/hooks/useStateView";

function MainPage() {
  return (
    <Box marginLeft="240px" marginTop="120px">
      <Switch>
        <Route path="/hooks/useState" exact>
          <UseStateView></UseStateView>
        </Route>
        <Route path="/hooks/useEffect" exact>
          <UseEffectView></UseEffectView>
        </Route>
        <Route path="/hooks/useRedux" exact>
          <UseReduxView></UseReduxView>
        </Route>
        <Route path="/hooks/useRefs" exact>
          <UseRefsView></UseRefsView>
        </Route>
        <Route path="/hooks/useMemo" exact>
          <UseMemoView></UseMemoView>
        </Route>
        <Route path="/hooks/customHooks" exact>
          <CustomHooksView></CustomHooksView>
        </Route>
        <Route path="/hooks/useContext" exact>
          <UseContextView></UseContextView>
        </Route>
        <Route path="/hooks/useReducer" exact>
          <UseReducerView></UseReducerView>
        </Route>
      </Switch>
    </Box>
  );
}

export default MainPage;
