import { SearchOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./chat.css";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
            <IconButton
        </div>
      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
