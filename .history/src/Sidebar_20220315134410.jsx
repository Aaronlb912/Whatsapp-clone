import React from "react";
import "./sidebar.css";
import { Avatar, IconButton } from "@mui/material";

import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
          <SearchOutlined/>
          <input placeholder="Search or start a new chat" ty />
      </div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
