import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          {/* Sidebar*/}
          <Sidebar />
          {/* Chat */}
          <Chat />
        </Router>
      </div>
    </div>
  );
}

export default App;
