import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Routes>
            <Route path='' />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
