import React from "react";
import Sidebar from "./Sidebar";

function nav() {
  return (
    <div className="nav">
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default nav;
