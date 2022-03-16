import { BRoute, Router, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <h1>Hello</h1>
        <Routes>
          <Route path="/" element={<Sidebar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
