import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./chat.css";

function Chat() {
    const [seed, setSeed] = useState


  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
      </div>
      <div className="chat__body">

      </div>
      <div className="chat__footer">

      </div>
    </div>
  );
}

export default Chat;
