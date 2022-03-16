import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path ="/rooms/:roomID" element = [/>
            <Route
              path="/"
              element={
                <>
                  <Chat />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
