import React from "react";
import Chat from "./Chat";
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
