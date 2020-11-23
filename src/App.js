import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import MainAppBar from "./components/layout/MainAppBar";

function App() {
  return (
    <div className="App">
    <MainAppBar></MainAppBar>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
