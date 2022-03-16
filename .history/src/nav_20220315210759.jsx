import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Nav() {
  return (
    <div className="nav">
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default nav;
