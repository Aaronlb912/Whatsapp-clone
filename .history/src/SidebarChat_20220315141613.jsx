import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat() {
    const [seed, setSeed] = useState('');

    useEffect (() => {
        ${Math.gl}
    }, [])

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message ...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
