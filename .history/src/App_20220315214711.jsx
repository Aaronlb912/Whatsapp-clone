import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Test from "./Test";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <h1>Hello</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Test />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
