import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Test from "./Test";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Routes>
            <Route path="/" element={<Sidebar /> <Chat/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
