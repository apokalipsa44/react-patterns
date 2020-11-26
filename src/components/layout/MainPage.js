import { Box, Spacing } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import CustomHooksView from "../../views/hooks/customHooksView";
import UseEffectView from "../../views/hooks/useEffectView";
import UseMemoView from "../../views/hooks/useMemoView";
import UseReduxView from "../../views/hooks/useReduxHooks";
import UseRefsView from "../../views/hooks/useRefsView";
import UseStateView from "../../views/hooks/useStateView";

function MainPage() {
  return (
    <Box marginLeft='240px' marginTop='120px'>
      <Switch>
      <Route path="/hooks/useState" exact>
        {UseStateView()}
      </Route>
      <Route path="/hooks/useEffect" exact>
        {UseEffectView}
      </Route>
      <Route path="/hooks/useRedux" exact>
        {UseReduxView}
      </Route>
      <Route path="/hooks/useRefs" exact>
        {UseRefsView}
      </Route>
      <Route path="/hooks/useMemo" exact>
        {UseMemoView}
      </Route>
      <Route path="/hooks/customHooks" exact>
        {CustomHooksView}
      </Route>
    </Switch>
    </Box>
    
  );
}

export default MainPage;
