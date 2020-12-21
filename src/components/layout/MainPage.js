import React from "react";
import { Route, Switch } from "react-router-dom";
import UseCallbackView from "../../views/hooks/UseCallbackView";
import CustomHooksView from "../../views/hooks/CustomHooksView";
import UseContextView from "../../views/hooks/UseContextView";
import UseEffectView from "../../views/hooks/UseEffectView";
import UseMemoView from "../../views/hooks/UseMemoView";
import UseReducerView from "../../views/hooks/UseReducerView";
import UseReduxView from "../../views/hooks/UseReduxView";
import UseRefsView from "../../views/hooks/UseRefsView";
import UseStateView from "../../views/hooks/UseStateView";
import ContextProviderView from '../../views/stateAndProps/ContextProviderView'
import SetStateView from '../../views/stateAndProps/SetStateView'
import ReduxView from '../../views/stateAndProps/ReduxView'
import  Dashboard  from "../../views/Dashboard";


import { makeStyles } from "@material-ui/core/styles";
import RenderPropsView from "../../views/stateAndProps/RenderPropsView";


const useStyles = makeStyles({
  mainPage: {
    marginTop: "120px",
  },
});

function MainPage() {
  const classes=useStyles()
  return (
    <div >
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
        <Route path="/hooks/useCallback" exact>
          <UseCallbackView></UseCallbackView>
        </Route>
        <Route path="/state/contextProvider" exact>
          <ContextProviderView/>
        </Route>
        <Route path="/state/redux" exact>
          <ReduxView/>
        </Route>
        <Route path="/state/setState" exact>
         <SetStateView/>
        </Route> 
         <Route path="/state/renderProps" exact>
         <RenderPropsView/>
        </Route>
        <Route path="/" exact>
         <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default MainPage;
