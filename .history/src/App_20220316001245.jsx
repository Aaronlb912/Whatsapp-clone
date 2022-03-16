import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (<Login />) : (
      <div className="app__body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomID" element={<Chat />} />
            <Route path="/" />
          </Routes>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
