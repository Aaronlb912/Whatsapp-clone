import React from "react";
import "./sidebar.css";
import { Avatar, IconButton } from '@mui/material';

import { Chat, DonutLarge, MoreVert } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <AccountCircleIcon />
        <div className="sidebar__headerRight">
            <IconButton>
                
            </IconButton>
          <DonutLarge />
          <Chat />
          <MoreVert />
        </div>
      </div>
      <div className="sidebar__search"></div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
