import { Route, Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Routes>
            <Route element={<Co />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
