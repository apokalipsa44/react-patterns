export const contextApiExampleCode = `import React, { Component } from "react";

export const NameContext = React.createContext();

export default class ContextProviderExample extends Component {
    state = {
        name: "UserName",
      };
      render() {
        return (
          <Container>
            <NameContext.Provider value={this.state}>
              <NotImportantChild />
            </NameContext.Provider>
          </Container>
        );
}

class NotImportantChild extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#d9b041", padding: "12px" }}>
        <h3>I didn't get any props...</h3>
        <ImportantChild></ImportantChild>
        <h3>end of the first child</h3>
      </div>
    );
  }
}

class ImportantChild extends Component {
  render() {
    return (
      <NameContext.Consumer>
        {(context) => (
          <div style={{ backgroundColor: "#f1f1f1", color:"#303030" }}>
            <h3>But i did!</h3>
            <h3>Name passed from context provider: {context.name}</h3>
          </div>
        )}
      </NameContext.Consumer>
    );
  }
}`;
export const contextApiBasicCode = `export const Context = React.createContext();  // first create context

export default class ContextProvider extends Component {
  state = {
    name: "some_value",
  };
  render() {
    return (
        <ContextProvider.Provider
          value={{
            state: this.state,
            stateModifyingFunction: () => this.state({ "some logic here" }),
          }}
        >
          {this.props.children}
        </ContextProvider.Provider>
    );
  }
}

//in nested child component
<ContextProvider.Consumer>
{(context) => (
  <>
    <p>Name: {context.state.name}</p>
    <button onClick={context.stateModifyingFunction}>Click Me</button>
  </>
)}
</ContextProvider.Consumer>`;



