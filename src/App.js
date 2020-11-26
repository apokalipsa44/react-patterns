import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import MainAppBar from "./components/layout/MainAppBar";
import MainPage from "./components/layout/MainPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MainAppBar></MainAppBar>
        <Sidebar></Sidebar>
        <MainPage></MainPage>
      </Router>
    </div>
  );
}

export default App;
