import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./chat.css";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
