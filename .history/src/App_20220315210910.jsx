import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Components from "./Components";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Routes>
            <Route path= 'element={<Components />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
